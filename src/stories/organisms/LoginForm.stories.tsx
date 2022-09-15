import LoginForm from "@organisms/LoginForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organisms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);
export const Login = Template.bind({});
Login.storyName = "ログインフォーム";
Login.args = {
  login: (user: string, password: string) => alert(`${user}:${password}`),
  goToSignup: () => alert("会員登録画面に遷移"),
  goToForgetPassword: () => alert("パスワードを忘れた画面に遷移"),
};
