import { FaBook } from "react-icons/fa6";
import "./certificates.scss";
import jsonData from "./certificates.json";

interface IProjectsData {
  date: string;
  title: string;
  program?: string;
  focus?: string;
  content?: string;
  institution: string;
}

export default function Works() {
  const itemData: IProjectsData[] = jsonData;
  return (
    <div className="certificates-container">
      <div className="certificates-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IProjectsData) => (
  <div className="certificates-card">
    <div className="certificates-card-content">
      <div className="certificates-card-content-date">{props.date}</div>
      <div className="certificates-card-content-title">{props.title}</div>
      <div className="certificates-card-content-institution">
        {<FaBook />}
        {props.institution}
      </div>
      <div className="certificates-card-content-program">{props.program}</div>
      <div className="certificates-card-content-focus">{props.focus}</div>
      <div className="certificates-card-content-content">{props.content}</div>
    </div>
  </div>
);
