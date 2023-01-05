import * as React from "react";
import { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-newsletter";

const Editor = () => {
  const [gjsEditor, setGjsEditor] = useState();

  useEffect(() => {
    const e = grapesjs.init({
      color: "white",
      height: "calc(100vh - 72px)",
      width: "100%",
      container: "#grapesjs-editor",
      plugins: [gsWebpage],
    });
    setGjsEditor(e);
  }, []);

  return <div id="grapesjs-editor"></div>;
};
export default Editor;
