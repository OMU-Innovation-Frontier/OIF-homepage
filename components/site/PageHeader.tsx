interface PageHeaderProps {
  title: string;
  lead: string;
}

export default function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <section className="border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-14 md:pt-24 md:pb-20">
        <h1 className="font-black leading-tight text-[clamp(2.25rem,6vw,4rem)] animate-fade-up">{title}</h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-loose text-ink/70 animate-fade-up [animation-delay:80ms]">
          {lead}
        </p>
      </div>
    </section>
  );
}
