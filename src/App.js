import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Nav";
import "./styles/app.css";
import './styles/common.modules.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navigation />
          <Header />
        </div>
      </header>
      <main>
        <div className="container">
          <Main />
        </div>
      </main>
    </>
  );
}

export default App;
