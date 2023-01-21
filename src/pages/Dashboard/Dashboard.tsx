import React, { useState } from "react";
import StatusCards from "./DashboardComponents/StatusCards/StatusCards";
import "./style.css";
import projectsData from "../../data/projectsMockdata.json";
import profilesData from "../../data/profiles.json";
import TeamCards from "./DashboardComponents/TeamsCards/TeamsCards";
import ProjectCards from "./DashboardComponents/ProjectCards/ProjectCards";
import Charts from "./DashboardComponents/Charts/Charts";

const Dashboard = () => {
  const [projects, setProjects] = useState(projectsData.projects);
  return (
    <div className="dashboardContainer">
      <div className="status">
        <StatusCards projects={projects} />
      </div>
      <div className="members">
        <TeamCards members={profilesData.profiles} />
      </div>
      <div className="graphs">
        <Charts projects={projects} />
      </div>
      <div className="projects">
        <ProjectCards projects={projects} />
      </div>
    </div>
  );
};

export default Dashboard;
