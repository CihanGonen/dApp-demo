import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import BuyTokenPage from "./BuyTokenPage";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:walletAdress" element={<BuyTokenPage />} />
          <Route path="/profile/:walletAdress" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
