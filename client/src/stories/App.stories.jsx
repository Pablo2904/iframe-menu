import React from "react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Example/AppWithIframe",
  component: App,
};
const Template = (args) => (
  <BrowserRouter>
    <App {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
