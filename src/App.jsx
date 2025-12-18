import React from "react";
import "./index.css";
import { Welcome, Navbar, Dock } from "#components";

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
}

export default App;
