import "./styles.css";

interface PropTypes {
  id: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClickHandler?: () => void;
}

export const CustomButton = ({
  id,
  children,
  variant,
  onClickHandler,
}: PropTypes) => (
  <button
    id={id}
    onClick={onClickHandler}
    className={`button-${variant} font-bold uppercase px-2`}
  >
    {children}
  </button>
);
