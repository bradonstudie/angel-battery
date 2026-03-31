import { useMemo } from "react";

interface PropTypes {
  /**
   * The text to render. First character will render as cursive.
   */
  text: string;
}

export const PageHeader = ({ text }: PropTypes) => {
  const splitText: string[] = useMemo(() => {
    return text.split("");
  }, [text]);

  /**
   * A reusable top level heading component.
   * Splits out the first character of the input text and renders it in cursive font.
   *
   * @param {PropTypes} props
   */
  return (
    <div className="mt-5 mb-3 flex">
      <h1 className="lg:text-7xl text-4xl">
        <span className="lg:text-8xl text-5xl font-cursive">
          {splitText[0]}
        </span>
        {...splitText.slice(1)}
      </h1>
    </div>
  );
};
