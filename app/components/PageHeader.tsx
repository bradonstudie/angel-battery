interface propTypes {
  pageName: string;
}

export function PageHeader({ pageName }: propTypes) {
  return (
    <h1 className="mb-5 w-full border border-white border-t-0 px-3">
      {pageName}
    </h1>
  );
}
