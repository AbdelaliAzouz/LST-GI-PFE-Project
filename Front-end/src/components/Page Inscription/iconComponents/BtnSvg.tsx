import * as React from "react";

function SvgBtnSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13 10" {...props}>
      <path d="M1 5h10M8 1l4 4-4 4" />
    </svg>
  );
}

export default SvgBtnSvg;
