import * as React from "react";
import { useEffect, useState, useRef } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-newsletter";
import { pdfPreviewButton } from "./Plugins/PDFPlugin";
import { useReactToPrint } from "react-to-print";
import PdfPreview from "../PDFPreview";

const Editor = () => {
  const [gjsEditor, setGjsEditor] = useState();
  const [printPDF, setPrintPDF] = useState(false);
  const componentRef = useRef();

  const showPrintDialog = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      //actions before the print
    },
    onAfterPrint: () => {
      //actions after the print
      const GjsContainer = document.getElementById("grapesjs-editor");
      GjsContainer.style.display = "block";
      setPrintPDF(false);
    },
  });

  const handlePreviewPdf = (editor) => {
    if (editor && editor.DomComponents.getComponents().models.length > 0) {
      const GjsContainer = document.getElementById("grapesjs-editor");
      GjsContainer.style.display = "none";
      setPrintPDF(true);
    } else {
      alert("Enter content to check PDF Preview!");
    }
  };

  useEffect(() => {
    const e = grapesjs.init({
      color: "white",
      height: "calc(100vh - 72px)",
      width: "100%",
      container: "#grapesjs-editor",
      plugins: [gsWebpage, pdfPreviewButton],
      pluginsOpts: {
        [pdfPreviewButton]: {
          handlePreviewPdf: handlePreviewPdf,
        },
      },
    });
    setGjsEditor(e);
  }, []);

  return (
    <>
      <div id="grapesjs-editor"></div>
      {printPDF && (
        <div style={{ overflow: "hidden", height: 0, marginRight: "37.5%" }}>
          <PdfPreview
            ref={componentRef}
            showPrintDialog={showPrintDialog}
            printHTML={gjsEditor.getHtml()}
            printCSS={gjsEditor.getCss()}
          />
        </div>
      )}
    </>
  );
};
export default Editor;
