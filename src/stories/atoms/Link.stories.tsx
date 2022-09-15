import Link from "@atoms/Link";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Link",
  component: Link,
  args: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;
export const PlaneLink = Template.bind({});
PlaneLink.args = {
  title: "●●はこちら",
  onClick: () => alert("リンクがクリックされました"),
};
