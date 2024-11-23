import { FaBook } from "react-icons/fa6";
import "./certificates.scss";
import jsonData from "./certificates.json";
import { useTranslation } from "react-i18next";

interface IProjectsData {
  index: number;
  date: string;
  title?: string;
  program?: string;
  focus?: string;
  content?: string;
  institution: string;
}

export default function Works() {
  const itemData: IProjectsData[] = jsonData.map((item, index) => ({ ...item, index }));
  return (
    <div className="certificates-container">
      <div className="certificates-body">
        {itemData.map((item, index) => (
          <WorksCard key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
}

const WorksCard = (props: IProjectsData) => {
  const { t } = useTranslation();
  return (
    <div className="certificates-card">
      <div className="certificates-card-content">
        <div className="certificates-card-content-date">{props.date}</div>
        <div className="certificates-card-content-title">{t(`certificates-view.${props.index}.title`)}</div>
        <div className="certificates-card-content-institution">
          {<FaBook />}
          {props.institution}
        </div>
        <div className="certificates-card-content-program">{props.program}</div>
        <div className="certificates-card-content-focus">{t(`certificates-view.${props.index}.focus`, { defaultValue: "" })}</div>
        <div className="certificates-card-content-content">{t(`certificates-view.${props.index}.content`, { defaultValue: "" })}</div>
      </div>
    </div>
  )
};
