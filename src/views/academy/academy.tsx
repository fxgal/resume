import { FaLocationPin } from "react-icons/fa6";
import "./academy.scss";
import jsonData from "./academy.json";

interface IProjectsData {
  date: string;
  degree: string;
  institution: string;
  location: string;
}

export default function Works() {
  const itemData: IProjectsData[] = jsonData;
  return (
    <div className="academy-container">
      <div className="academy-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IProjectsData) => (
  <div className="academy-card">
    <div className="academy-card-content">
      <div className="academy-card-content-date">{props.date}</div>
      <div className="academy-card-content-degree">{props.degree}</div>
      <div className="academy-card-content-institution">
        {props.institution}
      </div>
      <div className="academy-card-content-location">
        {<FaLocationPin />}
        {props.location}
      </div>
    </div>
  </div>
);
