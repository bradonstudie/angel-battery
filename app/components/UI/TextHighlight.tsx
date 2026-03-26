import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export const TextHighlight = ({ children }: PropTypes) => (
  <span className="bg-black text-white px-1">{children}</span>
);
