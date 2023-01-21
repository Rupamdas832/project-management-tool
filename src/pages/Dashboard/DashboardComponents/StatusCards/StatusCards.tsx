import React, { useEffect, useState } from "react";
import { ProjectsType } from "src/types/projectType";
import "./StatusCards.css";

type StatusCardPropsType = {
  projects: ProjectsType;
};

type ProjectBreakupType = {
  delayed: number;
  completed: number;
  ongoing: number;
};
const StatusCards = ({ projects }: StatusCardPropsType) => {
  const [projectBreakups, setProjectBreakups] = useState<ProjectBreakupType>({
    delayed: 0,
    completed: 0,
    ongoing: 0,
  });

  useEffect(() => {
    if (projects.length > 0) {
      const delayedProjects = projects.filter(
        (item) => item.status === "DELAYED"
      );
      const completedProjects = projects.filter(
        (item) => item.status === "COMPLETED"
      );
      const ongoingProjects = projects.filter(
        (item) => item.status === "ONGOING"
      );
      const data = {
        delayed: delayedProjects.length,
        completed: completedProjects.length,
        ongoing: ongoingProjects.length,
      };
      setProjectBreakups(data);
    }
  }, [projects]);

  return (
    <div className="StatusContainer">
      <div className="statusCard">
        <h2>{projects.length}</h2>
        <p>Total Projects</p>
      </div>
      <div className="statusCard completed">
        <h2>{projectBreakups.completed}</h2>
        <p>Completed</p>
      </div>
      <div className="statusCard ongoing">
        <h2>{projectBreakups.ongoing}</h2>
        <p>Ongoing</p>
      </div>
      <div className="statusCard delayed">
        <h2>{projectBreakups.delayed}</h2>
        <p>Delayed</p>
      </div>
      <div className="statusCard">
        <h2>5</h2>
        <p>Employees</p>
      </div>
    </div>
  );
};

export default StatusCards;
