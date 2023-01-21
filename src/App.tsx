import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
