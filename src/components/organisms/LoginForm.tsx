import Button from "@atoms/Button";
import InputText from "@molecules/InputText";
import Link from "@atoms/Link";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import SingleTextBox from "@atoms/SingleTextBox";

type Props = {
  className?: string;
  login: (userName: string, password: string) => void;
  goToSignup: () => void;
  goToForgetPassword: () => void;
};

const Container = styled.div`
  padding: 30px;
  border: 1px solid black;
`;

const InputContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLoginButton = styled(Button)`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
`;

const LeftStyledLink = styled(StyledLink)`
  margin-right: 40px;
`;

const LinkContainer = styled.div`
  margin-top: 20px;
`;

const LoginForm = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const userNameInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    userNameInputRef.current?.focus();
  }, []);
  return (
    <Container className={props.className}>
      <InputContainer>
        <InputText
          label="ユーザ名"
          labelWidth={"120px"}
          width={"100%"}
          require={true}
          placeholder="ユーザ名を入力してください"
          ref={userNameInputRef}
          onChangeValue={(value: string) => setUserName(value)}
          onKeyPress={(key: string) => {
            if (key === "Enter") passwordInputRef.current?.focus();
          }}
        />
        <InputText
          label="パスワード"
          labelWidth={"120px"}
          width={"100%"}
          require={true}
          placeholder="パスワードを入力してください"
          secure={true}
          ref={passwordInputRef}
          onChangeValue={(value: string) => setPassword(value)}
          onKeyPress={(key: string) => {
            if (key === "Enter") props.login(userName, password);
          }}
        />
      </InputContainer>
      <StyledLoginButton
        title="ログイン"
        type="primary"
        onClick={() => props.login(userName, password)}
      />
      <LinkContainer>
        <LeftStyledLink
          title={"会員を作成していない方はこちら"}
          onClick={props.goToSignup}
        />
        <StyledLink
          title={"パスワードを忘れた場合"}
          onClick={props.goToForgetPassword}
        />
      </LinkContainer>
    </Container>
  );
};

const Styled = styled(LoginForm)`
  min-width: 415px;
`;

export default Styled;
