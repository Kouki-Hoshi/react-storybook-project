import Button from "@atoms/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select", options: ["default", "primary", "danger"] },
    },
  },
  args: {
    onClick: () => alert("押した"),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const CancelButton = Template.bind({});
CancelButton.storyName = "キャンセルボタン";
CancelButton.args = {
  title: "キャンセル",
  type: "default",
};

export const SaveButton = Template.bind({});
SaveButton.storyName = "保存ボタン";
SaveButton.args = {
  title: "保存",
  type: "primary",
};

export const DeleteButton = Template.bind({});
DeleteButton.storyName = "削除ボタン";
DeleteButton.args = {
  title: "削除",
  type: "danger",
};
