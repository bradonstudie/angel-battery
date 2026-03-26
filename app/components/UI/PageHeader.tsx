interface PropTypes {
  text: string;
}

export const PageHeader = ({ text }: PropTypes) => (
  <div className="my-5 flex">
    <h1 className="uppercase lg:text-7xl text-5xl">{text}</h1>
  </div>
);
