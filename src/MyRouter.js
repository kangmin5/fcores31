import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUploadPage from "./components/FileUploadPage";
import Layout from "./Layout";
import Main from "./Main";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/fileupload" element={<FileUploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
