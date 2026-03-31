interface PropTypes {
  children: React.ReactNode;
  title: string;
  variant: "bg-document" | "bg-document-2";
  backgroundImageSrc: string;
}

export const StickyNote = ({
  backgroundImageSrc,
  children,
  title,
  variant,
}: PropTypes) => (
  <div
    className={`${variant} bg-center bg-cover bg-no-repeat aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3`}
    style={{
      backgroundImage: `url(${backgroundImageSrc})`,
    }}
  >
    <h3 className="text-2xl uppercase">{title}:</h3>
    {children}
  </div>
);
