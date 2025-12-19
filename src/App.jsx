import React from "react";
import "./index.css";
import { Welcome, Navbar, Dock } from "#components";
import { Terminal } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
}

export default App;
