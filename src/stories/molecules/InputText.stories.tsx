import InputText from "@molecules/InputText";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);
export const LoginUserName = Template.bind({});
LoginUserName.storyName = "ログインユーザ名";
LoginUserName.args = {
  label: "ログインユーザ名",
  require: true,
  width: "300px",
  placeholder: "ユーザ名を入力してください",
};
