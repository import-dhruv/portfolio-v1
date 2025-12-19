import React from "react";
import "./index.css";
import { Welcome, Navbar, Dock } from "#components";
import { Terminal, Safari, Resume } from "#windows";
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
      <Safari />
      <Resume />
    </main>
  );
}

export default App;
