import { FaLocationPin } from "react-icons/fa6";
import "./projects.scss";
import jsonData from "./projects.json";
import { FaCheck } from "react-icons/fa";

interface IProjectsData {
  date: string;
  position: string;
  description: string;
  company: string;
  responsibilities: string[];
  technologies: string[];
  location: string;
  websites?: string[];
}

export default function Works() {
  const itemData: IProjectsData[] = jsonData;
  return (
    <div className="project-container">
      <div className="project-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IProjectsData) => (
  <div className="project-card">
    <div className="project-card-content">
      <div className="project-card-content-date">{props.date}</div>
      <div className="project-card-content-position">{props.position}</div>
      <div className="project-card-content-company">{props.company}</div>
      <div className="project-card-content-location">
        {<FaLocationPin />}
        {props.location}
      </div>
      <div className="project-card-content-description">
        <p>{props.description}</p>
      </div>
      <div className="project-card-content-responsibilities">
        <h3>Responsibilities:</h3>
        <div className="items">
          {props.responsibilities.map((item, index) => (
            <div className="item">
              <FaCheck />
              <span key={index}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="project-card-content-technologies">
        {props.technologies.map((item, index) => (
          <span className="badge" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);
