export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-black/20" />
            <span className="h-2 w-2 bg-black/12" />
            <span className="h-1.5 w-1.5 bg-black/20" />
          </div>
          <div className="h-px flex-1 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
