import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export const TextHighlight = ({ children }: PropTypes) => (
  <span className="bg-[var(--page-text-color)] text-[var(--page-bg)] px-1">
    {children}
  </span>
);
