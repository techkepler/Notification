import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/Document";

const Pdf = () => {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};

export default Pdf;
