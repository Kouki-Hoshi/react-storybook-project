import FormLabel from "@atoms/FormLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/FormLabel",
  component: FormLabel,
  args: {},
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <FormLabel {...args} />
);
export const Label = Template.bind({});
Label.args = {
  title: "メールアドレス",
  require: true,
};
