import SingleTextBox from "@atoms/SingleTextBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/SingleTextBox",
  component: SingleTextBox,
} as ComponentMeta<typeof SingleTextBox>;

const Template: ComponentStory<typeof SingleTextBox> = (args) => (
  <SingleTextBox {...args} />
);
export const Empty = Template.bind({});
Empty.storyName = "設定なし";
Empty.args = {
  placeholder: "ユーザ名を入力してください",
};

export const FullSetting = Template.bind({});
FullSetting.storyName = "入力済状態";
FullSetting.args = {
  placeholder: "ユーザ名を入力してください",
  defaultValue: "山田太郎",
  onBlur: (value: string) => alert(`入力した値: ${value}`),
};

export const SecureText = Template.bind({});
SecureText.storyName = "パスワード";
SecureText.args = {
  placeholder: "パスワードを入力してください",
  secure: true,
};
