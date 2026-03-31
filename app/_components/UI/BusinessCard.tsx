interface PropTypes {
  backgroundImageSrc: string;
  emailAddress: string;
  siteUrl: string;
  mapUrl: string;
}

export const BusinessCard = ({
  backgroundImageSrc,
  emailAddress,
  siteUrl,
  mapUrl,
}: PropTypes) => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rotate-2 transition hover:rotate-0 aspect-3.5/2 py-2 px-3 flex flex-col items-start justify-between w-full bg-white"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
      }}
    >
      <div>
        <h2 className="uppercase text-3xl px-2">Bradon Studebaker</h2>
        <a href={mapUrl} target="_blank" className="uppercase px-2">
          Baltimore, MD
        </a>
      </div>
      <div className="flex flex-col justify-between uppercase">
        <a href={siteUrl} target="_blank" className="px-2 mb-1">
          {siteUrl}
        </a>
        <a href={`mailto:${emailAddress}`} target="_blank" className="px-2">
          {emailAddress}
        </a>
      </div>
    </div>
  );
};
