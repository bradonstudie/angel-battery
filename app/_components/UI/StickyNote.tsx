interface PropTypes {
  children: React.ReactNode;
  title: string;
  backgroundImageSrc: string;
}

export const StickyNote = ({
  backgroundImageSrc,
  children,
  title,
}: PropTypes) => (
  <div
    className={`uppercase border border-dashed border-red-500 bg-[var(--page-bg)] bg-center bg-cover bg-no-repeat aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3 w-9/10 items-center`}
    style={{
      backgroundImage: `url(${backgroundImageSrc})`,
    }}
  >
    <h3 className="text-2xl font-bold underline">{title}:</h3>
    {children}
  </div>
);
