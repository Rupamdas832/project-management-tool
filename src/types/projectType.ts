import data from "../data/projectsMockdata.json";

export type ProjectsType = typeof data.projects;

type ProjectStatus = "COMPLETED" | "DELAYED" | "ONGOING";
