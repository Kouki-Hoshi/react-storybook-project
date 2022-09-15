import { useState } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  title: string;
  onClick: () => void;
};

const Base = (
  props: Props & {
    onHover: () => void;
    onLeave: () => void;
  }
) => {
  return (
    <span
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onLeave}
      className={props.className}
    >
      {props.title}
    </span>
  );
};

const NotHovered = styled(Base)`
  color: blue;
`;

const Hovered = styled(NotHovered)`
  text-decoration: underline;
  cursor: pointer;
`;

const StyledLink = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const onHover = () => setIsHovered(true);
  const onLeave = () => setIsHovered(false);
  return isHovered ? (
    <Hovered {...props} onHover={onHover} onLeave={onLeave} />
  ) : (
    <NotHovered {...props} onHover={onHover} onLeave={onLeave} />
  );
};

export default StyledLink;
