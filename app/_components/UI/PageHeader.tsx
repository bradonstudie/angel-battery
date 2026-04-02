import { ArrowDownCircle } from "react-bootstrap-icons";

interface PropTypes {
  text: string;
}

export const PageHeader = ({ text }: PropTypes) => {
  return (
    <div className="mt-5 mb-3 flex">
      <h1 className="lg:text-7xl text-4xl">{text}</h1>
      <ArrowDownCircle className="fill-red-500 ml-2 animate-[spin_6s_infinite] lg:size-[1.75em] size-[1em]" />
    </div>
  );
};
