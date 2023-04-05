import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./Header";

export type ILayout = object;

type ILayoutReturn = JSX.Element;

const Layout = ({ children }: PropsWithChildren<ILayout>): ILayoutReturn => (
  <Paper elevation={0}>
    <Header />
    {children}
  </Paper>
);

export default Layout;
