import React from "react";
import { action } from "@storybook/addon-actions";
import Menu from "../components/Menu";

export default {
  title: "Example/Menu",
  component: Menu,
};
const onClick = action("onClick");
const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      slug: "we-connect",
      title: "We-Conect Home page",
      url: "https://www.we-conect.com/",
      children: [
        {
          slug: "live-events",
          title: "Live Event",
          url: "https://www.we-conect.com/liveevents",
        },
        {
          slug: "digital-managed-events",
          title: "Digital Managed Events",
          url: "https://www.we-conect.com/l digital-managed-events",
        },
      ],
    },
    {
      slug: "google",
      title: "Google",
      url: "https://www.google.de",
    },
  ],
  setSelectedUrl: onClick,
  setSelectedSlug: onClick,
  navigate: () => onClick,
};
