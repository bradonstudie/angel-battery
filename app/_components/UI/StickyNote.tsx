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
    className={`uppercase bg-white bg-center bg-cover bg-no-repeat aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3`}
    style={{
      backgroundImage: `url(${backgroundImageSrc})`,
    }}
  >
    <h3 className="text-2xl font-bold underline">{title}:</h3>
    {children}
  </div>
);
