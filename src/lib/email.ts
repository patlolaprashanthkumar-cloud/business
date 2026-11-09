import { SITE, FORMS_CONFIG } from './constants';

const ACCESS_KEY = FORMS_CONFIG.accessKey;
const DESIGNATED_EMAIL = FORMS_CONFIG.designatedEmail;

export interface FormSubmissionPayload {
  formName: string;
  subject?: string;
  replyTo?: string;
  data: Record<string, string | number | boolean | null | undefined>;
}

export async function sendFormEmail({
  formName,
  subject,
  replyTo,
  data,
}: FormSubmissionPayload): Promise<{ success: boolean; message?: string }> {
  const cleanData: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (value !== null && value !== undefined && value !== '') {
      cleanData[key] = String(value);
    }
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: subject || `New Submission: ${formName} - ${SITE.brandName}`,
    from_name: `${SITE.brandName} Website`,
    to_email: DESIGNATED_EMAIL,
    replyto: replyTo || cleanData['Email Address'] || cleanData.email || undefined,
    form_source: formName,
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ...cleanData,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Failed to submit form to email service.');
  }

  return { success: true, message: result.message };
}
