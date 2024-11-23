import { FaLocationPin } from "react-icons/fa6";
import "./projects.scss";
import jsonData from "./projects.json";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface IProjectsData {
  index: number;
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
  const itemData: IProjectsData[] = jsonData.map((item, index) => ({ ...item, index }));
  return (
    <div className="project-container">
      <div className="project-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IProjectsData) => {
  const { t } = useTranslation();
  const { index } = props;
  return (
    <div className="project-card">
      <div className="project-card-content">
        <div className="project-card-content-date">{props.date}</div>
        <div className="project-card-content-position">{t(`projects-view.${index}.position`)}</div>
        <div className="project-card-content-company">{props.company}</div>
        <div className="project-card-content-location">
          {<FaLocationPin />}
          {props.location}
        </div>
        <div className="project-card-content-description">
          <p>{t(`projects-view.${index}.description`)}</p>
        </div>
        <div className="project-card-content-responsibilities">
          <h3>{t("responsibilities")}:</h3>
          <div className="items">
            {props.responsibilities.map((item, i) => (
              <div className="item">
                <FaCheck />
                <span key={i}>{t(`projects-view.${index}.responsibilities.${item}`)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="project-card-content-technologies">
          {props.technologies.map((item, i) => (
            <span className="badge" key={i}>
              {t(`projects-view.${index}.technologies.${item}`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
};
