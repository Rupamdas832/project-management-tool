import React, { useEffect, useState } from "react";
import { ProjectsType } from "src/types/projectType";
import "./Charts.css";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

type ChartsPropType = {
  projects: ProjectsType;
};

type ChartDataType = {
  labels: Array<string>;
  datasets: Array<DatasetType>;
};

type DatasetType = {
  data: Array<number>;
  backgroundColor: Array<string>;
  hoverOffset: number;
};

const Charts = ({ projects }: ChartsPropType) => {
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [""],
    datasets: [{ data: [0], backgroundColor: [""], hoverOffset: 0 }],
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
        labels: ["Ongoing", "Completed", "Delayed"],
        datasets: [
          {
            data: [
              ongoingProjects.length,
              completedProjects.length,
              delayedProjects.length,
            ],
            backgroundColor: [
              "rgb(231, 196, 0)",
              "rgb(0, 172, 152)",
              "rgb(212, 0, 0)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      setChartData(data);
    }
  }, [projects]);

  const lineData = {
    labels: [
      "19June",
      "20June",
      "21June",
      "22June",
      "23June",
      "24June",
      "25June",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [0, 1000, 3500, 3200, 4000, 5600, 6300],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chartsContainer">
      <div className="lineChartContainer">
        <div className="lineChart">
          <Line data={lineData} />
        </div>
      </div>
      <div className="doughnutChartContainer">
        <div className="doughnutChartHeader">
          <p>Budget</p>
          <p>Status</p>
        </div>
        {projects.length > 0 && (
          <div className="doughnutChartBody">
            <div className="doughnutChart">
              <Doughnut
                data={chartData}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      align: "start",
                      labels: {
                        pointStyle: "circle",
                        usePointStyle: true,
                        boxWidth: 8,
                        boxHeight: 8,
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="doughnutCenterTitle">
              <div className="doughnutCenterTitleNumber">{projects.length}</div>
              <div>Total Projects</div>
            </div>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Charts;
