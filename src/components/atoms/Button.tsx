import styled from "styled-components";

type ButtonType = "default" | "primary" | "danger";
type Props = {
  title: string;
  type: ButtonType;
  onClick: () => void;
};

const Base = (props: Props & { className?: string }) => (
  <button type="button" className={props.className} onClick={props.onClick}>
    {props.title}
  </button>
);

const borderColor: { [key in ButtonType]: string } = {
  default: "#6c757d",
  primary: "#007bff",
  danger: "#dc3545",
};

const backgroundColors: { [key in ButtonType]: string } = {
  default: "#f8f9fa",
  primary: "#007bff",
  danger: "#dc3545",
};

const labelColors: { [key in ButtonType]: string } = {
  default: "black",
  primary: "white",
  danger: "white",
};

export default styled(Base)`
  height: 40px;
  padding: 6px 12px;
  color: ${(props: Props) => labelColors[props.type]};
  background-color: ${(props: Props) => backgroundColors[props.type]};
  border-radius: 10px;
  border-color: ${(props: Props) => borderColor[props.type]};
  border-width: 1px;
`;
