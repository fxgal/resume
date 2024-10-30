import React, { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import "./app.scss";
import Profile from "./views/profile/profile";
import Technologies from "./views/technologies/technologies";
import Works from "./views/works/works";
import Projects from "./views/projects/projects";
import Academy from "./views/academy/academy";
import Certificates from "./views/certificates/certificates";
import { Route, Routes } from "react-router";

type LayoutProps = {
  children?: ReactNode;
};

const App: React.FC<LayoutProps> = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-container-body">
        <h1 className="app-container-body-header">Web Developer Full Stack</h1>
        <Routes>
          <Route path="/resume/" element={<Profile />} />
          <Route path="/resume/technologies" element={<Technologies />} />
          <Route path="/resume/works" element={<Works />} />
          <Route path="/resume/projects" element={<Projects />} />
          <Route path="/resume/academy" element={<Academy />} />
          <Route path="/resume/certificates" element={<Certificates />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
