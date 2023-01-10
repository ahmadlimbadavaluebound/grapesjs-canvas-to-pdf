import React, { useEffect } from "react";

import InnerHTML from "dangerously-set-html-content";

const PdfPreview = React.forwardRef((props, ref) => {
  const { printCSS, printHTML, showPrintDialog } = props;

  useEffect(() => showPrintDialog(), []);

  return (
    <div ref={ref} id="pdf-preview-main-cont">
      <div>
        <div>
          <style type="text/css">{printCSS}</style>
        </div>
        <InnerHTML html={printHTML} />
      </div>
    </div>
  );
});

export default PdfPreview;
