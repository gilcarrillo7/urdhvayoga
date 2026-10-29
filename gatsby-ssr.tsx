import * as React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <meta
      key="facebook-domain-verification"
      name="facebook-domain-verification"
      content="mef3cxc2d9gfcmck5cfbacyg8y3wcm"
    />,
  ]);
};
