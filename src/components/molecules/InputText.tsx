import FormLabel from "@atoms/FormLabel";
import SingleTextBox from "@atoms/SingleTextBox";
import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  label: string;
  require?: boolean;
  width?: string;
  labelWidth?: string;
  placeholder?: string;
  defaultValue?: string;
  secure?: boolean;
  inputRef?: ForwardedRef<HTMLInputElement>;
  onChangeValue?: (value: string) => void;
  onBlur?: (value: string) => void;
  onKeyPress?: (key: string) => void;
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledLabel = styled(FormLabel)`
  height: 40px;
  margin-right: 10px;
`;

const InputText = (props: Props) => {
  const { label, labelWidth, require, className, inputRef, ...others } = props;
  return (
    <Container className={className}>
      <StyledLabel title={label} require={require} width={labelWidth} />
      <SingleTextBox {...others} ref={inputRef} />
    </Container>
  );
};

export default forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputText {...props} inputRef={ref} />
));
