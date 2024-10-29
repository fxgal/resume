import React, { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import "./app.scss";

type LayoutProps = {
  children?: ReactNode;
};

const App: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-container-body">
        <h1 className="app-container-body-header">Web Developer Full Stack</h1>
        {children}
      </div>
    </div>
  );
};

export default App;
