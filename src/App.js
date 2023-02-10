import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Nav";
import "./styles/App.css";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
