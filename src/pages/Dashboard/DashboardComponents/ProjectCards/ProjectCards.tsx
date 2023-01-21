import React from "react";
import { ProjectsType } from "src/types/projectType";
import "./ProjectCards.css";

type ProductCardsPropType = {
  projects: ProjectsType;
};

const getPercentage = (curr, total) => {
  return (curr * 100) / total;
};

const getPosition = (curr, total) => {
  const perc = getPercentage(curr, total);

  if (perc < 51) {
    return "FIRST_HALF";
  } else if (perc < 101) {
    return "SECOND_HALF";
  } else {
    return "EXCEEDS";
  }
};

const ProjectCards = ({ projects }: ProductCardsPropType) => {
  return (
    <div className="projectCardsContainer">
      <div className="projectCardsHeader">
        <h3>Budget Status</h3>
        <button className="projectAddButton">+ Add New Project</button>
        <button className="projectButton">Download Report</button>
        <input type="date" className="projectButton" />
        <button className="projectButton">Filter</button>
      </div>
      <div className="projectCards">
        {projects.map((project) => {
          return (
            <div className="projectElement" key={project.id}>
              <h4>{project.title}</h4>
              <p className="projectAssigneeElement">{project.assignee_name}</p>
              <div className="projectBudgetElement">
                <p>Total Budget: </p>
                <p className="projectBudget">{project.total_budget} $</p>
              </div>
              <div className="projectBudgetElement">
                <p>Profitablity(100%): </p>
                <p className="projectBudget">{project.profitable} $</p>
              </div>
              <div className="projectProgressElement">
                <div
                  className={`projectProgressBarBackground ${getPosition(
                    project.actual_hours,
                    project.sold_hours
                  )}`}
                >
                  <div
                    style={{
                      width: `${getPercentage(
                        project.actual_hours,
                        project.sold_hours
                      )}%`,
                    }}
                    className={`projectProgressBar ${getPosition(
                      project.actual_hours,
                      project.sold_hours
                    )}`}
                  ></div>
                </div>
              </div>
              <div className="projectHourElement">
                <p>Actual hours: {project.actual_hours}</p>
                <p>{project.sold_hours} sold hours</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;
