interface propTypes {
  pageName: string;
}

export function PageHeader({ pageName }: propTypes) {
  return (
    <h1 className="w-full border border-foreground border-t-0 px-3 normal-case bg-foreground text-background font-bold">
      {pageName}
    </h1>
  );
}
