import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import instance from "./instance";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   axios.get("karaoke/search?singer=빅뱅").then((res) => {
  //     console.log(res.data);
  //   });
  // });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
