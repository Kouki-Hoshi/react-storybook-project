import styled, { css } from "styled-components";

type Props = {
  title: string;
  require?: boolean;
  width?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-left: 5px solid #bb541f;
`;

const TextContainer = styled.div`
  padding-left: 20px;
`;

const RequireMessage = styled.span`
  color: red;
  padding-left: 5px;
`;

const Base = (props: Props & { className?: string }) => (
  <Container className={props.className}>
    <TextContainer>
      {props.title}
      {props.require && <RequireMessage>*</RequireMessage>}：
    </TextContainer>
  </Container>
);

export default styled(Base)`
  font-size: 14px;
  color: black;

  ${(props: Props) =>
    props.width &&
    css`
      min-width: ${props.width};
      width: ${props.width};
    `}
`;
