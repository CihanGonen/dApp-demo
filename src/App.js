import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import BuyTokenPage from "./BuyTokenPage";
import ProfilePage from "./ProfilePage";

const App = () => {
  const [walletAdress, setWalletAdress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setWalletAdress={setWalletAdress}
                setWalletBalance={setWalletBalance}
              />
            }
          />
          <Route
            path="/:walletAdress"
            element={<BuyTokenPage walletBalance={walletBalance} />}
          />
          <Route
            path="/profile/:walletAdress"
            element={<ProfilePage walletAdress={walletAdress} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
