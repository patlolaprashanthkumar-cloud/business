export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? 'text-navy-200' : 'text-navy-600'} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}
