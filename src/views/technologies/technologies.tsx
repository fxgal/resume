import { FaJava } from "react-icons/fa6";
import "./technologies.scss";
import {
  FaAws,
  FaCheck,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";

export default function Technologies() {
  const itemData: TechnologiesProps[] = [
    {
      icon: <FaNode />,
      name: "NestJS/NodeJS/Express",
      percentage: 90,
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
      percentage: 70,
    },
    {
      icon: <FaCheck />,
      name: "TypeScript/TSX",
      percentage: 90,
    },
    {
      icon: <FaCss3 />,
      name: "CSS/SCSS",
      percentage: 90,
    },
    {
      icon: <FaDocker />,
      name: "Docker/Kubernetes",
      percentage: 80,
      tag: "Monitoreo de pods",
    },
    {
      icon: <FaAws />,
      name: "AWS/SNS/SQS/S3/EC2/CloudFront/Lambda/Fargate",
      percentage: 80,
    },
    {
      icon: <FaGitAlt />,
      name: "Git/GitHub/GitLab/Bitbucket",
      percentage: 90,
    },
    {
      icon: <FaLinux />,
      name: "GNU/Linux",
      percentage: 90,
    },
    {
      icon: <FaCheck />,
      name: "JavaScript/ES6",
      percentage: 90,
    },
    {
      icon: <FaDatabase />,
      name: "MongoDb/ElasticSearch/NoSQL",
      percentage: 70,
    },
    {
      icon: <FaDatabase />,
      name: "MySQL/PostgreSQL",
      percentage: 90,
    },
    {
      icon: <FaPhp />,
      name: "PHP/CakePHP",
      percentage: 70,
      tag: "Por Actualizar",
    },
    {
      icon: <FaPython />,
      name: "Python",
      percentage: 50,
      tag: "Por Actualizar",
    },
    {
      icon: <FaJava />,
      name: "Java",
      percentage: 50,
      tag: "Por Actualizar",
    },
  ];

  return (
    <div className="tech-container">
      <div className="tech-body">
        {itemData.map((item, index) => (
          <TechnologiesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

interface TechnologiesProps {
  icon?: React.ReactNode;
  name: string;
  percentage?: number;
  tag?: string;
}

const TechnologiesCard = (props: TechnologiesProps) => (
  <div className="tech-card">
    <div className="tech-card-content">
      <div className="tech-card-content-icon">{props.icon}</div>
      <div className="tech-card-content-name">{props.name}</div>
      {props.tag && <div className="tech-card-content-tag">{props.tag}</div>}
    </div>
    <div className="tech-card-percentage">
      <div
        className="tech-card-percentage-bar"
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  </div>
);
