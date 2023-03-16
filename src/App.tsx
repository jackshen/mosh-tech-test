import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Landing from "./pages/Landing";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: "Maison Neue";
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route element={<Landing />} path="" />
        {/* If this were a proper SPA, you would be able to add more pages here */}
      </Routes>
    </AppWrapper>
  );
};

export default App;
