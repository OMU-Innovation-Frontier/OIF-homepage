export default function SectionDivider() {
  return (
    <div aria-hidden="true">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-ink/10" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-ink/25" />
            <span className="h-2 w-2 bg-accent/50" />
            <span className="h-1.5 w-1.5 bg-ink/25" />
          </div>
          <div className="h-px flex-1 bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
