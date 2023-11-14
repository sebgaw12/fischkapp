import React from "react";
import { Layout } from "./AppLayout.style";

export const AppLayout = (props: any): React.JSX.Element => {
 return  (
  <>
    <Layout>{props.children}</Layout>
  </>
);
}
