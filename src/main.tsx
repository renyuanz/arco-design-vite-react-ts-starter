import React from "react";
import { render } from "react-dom";
import { Button } from "@arco-design/web-react";
import { IconLeft, IconRight } from "@arco-design/web-react/icon";

render(
  <>
    <Button type="primary" icon={<IconLeft />}>
      ArcoDesign
    </Button>
    <Button type="primary" icon={<IconRight />}>
      ArcoDesign
    </Button>
  </>,
  document.getElementById("root")
);
