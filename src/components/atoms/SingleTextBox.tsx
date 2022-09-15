import { ForwardedRef, forwardRef, useState } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  width?: string;
  placeholder?: string;
  defaultValue?: string;
  secure?: boolean;
  inputRef?: ForwardedRef<HTMLInputElement>;
  onChangeValue?: (value: string) => void;
  onBlur?: (value: string) => void;
  onKeyPress?: (key: string) => void;
};

const Base = ({
  className,
  placeholder = "",
  defaultValue = "",
  secure = false,
  inputRef = undefined,
  onChangeValue = undefined,
  onBlur = undefined,
  onKeyPress = undefined,
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <input
      type={secure ? "password" : "text"}
      className={className}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChangeValue) onChangeValue(e.target.value);
      }}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) onBlur(e.target.value);
      }}
      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyPress) onKeyPress(e.key);
      }}
    />
  );
};

const Styled = styled(Base)`
  height: 30px;
  padding: 6px 12px;
  border-radius: 10px;
  border-width: 1px;
  width: ${(prop: Props) => prop.width ?? "200px"};
`;

export default forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Styled {...props} inputRef={ref} />
));
