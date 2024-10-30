import { FaLocationPin } from "react-icons/fa6";
import "./works.scss";
import jsonData from "./works.json";

interface IWorksData {
  date: string;
  position: string;
  company: string;
  location: string;
  website: string;
}

export default function Works() {
  const itemData: IWorksData[] = jsonData;
  return (
    <div className="work-container">
      <div className="work-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IWorksData) => (
  <div className="work-card">
    <div className="work-card-content">
      <div className="work-card-content-date">{props.date}</div>
      <div className="work-card-content-position">{props.position}</div>
      <div className="work-card-content-company">{props.company}</div>
      <div className="work-card-content-location">
        {<FaLocationPin />}
        {props.location}
      </div>
    </div>
  </div>
);
