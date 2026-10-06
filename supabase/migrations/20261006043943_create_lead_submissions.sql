/*
# Create lead submission tables for business consulting website

1. New Tables
- `consultation_requests`: Stores consultation booking requests from the website.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - company (text)
  - preferred_date (text)
  - preferred_time (text)
  - topic (text)
  - message (text)
  - status (text, default 'new')
  - created_at (timestamptz, default now())

- `assessment_requests`: Stores multi-step business assessment form submissions.
  - id (uuid, primary key)
  - full_name (text, not null)
  - company_name (text)
  - email (text, not null)
  - phone (text, not null)
  - city_state (text)
  - industry (text)
  - business_stage (text)
  - turnover_range (text)
  - employee_count (text)
  - primary_challenge (text)
  - services_required (text)
  - preferred_contact_time (text)
  - additional_info (text)
  - consent (boolean, default false)
  - status (text, default 'new')
  - created_at (timestamptz, default now())

- `contact_messages`: Stores general contact form submissions.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text)
  - subject (text)
  - message (text, not null)
  - status (text, default 'new')
  - created_at (timestamptz, default now())

- `proposal_requests`: Stores pricing/package proposal requests.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - company (text)
  - package_name (text)
  - message (text)
  - status (text, default 'new')
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on all tables.
- Allow anon + authenticated INSERT only (public submission forms).
- No SELECT/UPDATE/DELETE for anon (data is private to the business owner).
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  preferred_date text,
  preferred_time text,
  topic text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultations" ON consultation_requests;
CREATE POLICY "anon_insert_consultations"
ON consultation_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS assessment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text NOT NULL,
  city_state text,
  industry text,
  business_stage text,
  turnover_range text,
  employee_count text,
  primary_challenge text,
  services_required text,
  preferred_contact_time text,
  additional_info text,
  consent boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE assessment_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_assessments" ON assessment_requests;
CREATE POLICY "anon_insert_assessments"
ON assessment_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contacts" ON contact_messages;
CREATE POLICY "anon_insert_contacts"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS proposal_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  package_name text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE proposal_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_proposals" ON proposal_requests;
CREATE POLICY "anon_insert_proposals"
ON proposal_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
