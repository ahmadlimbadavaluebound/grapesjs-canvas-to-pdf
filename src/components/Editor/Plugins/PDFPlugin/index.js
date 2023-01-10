export const pdfPreviewButton = (editor, options) => {
  editor.Panels.addButton("options", {
    id: "pdf-preview",
    className: "fa fa-file-pdf-o",

    command: function (editor) {
      options.handlePreviewPdf(editor);
    },

    attributes: { title: "Preview Pdf" },

    active: false,
  });
};
