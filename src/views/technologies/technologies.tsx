import "./technologies.scss";
import { FaCheck } from "react-icons/fa";

export default function Technologies() {
  const itemData: TechnologiesProps[] = [
    {
      icon: <FaCheck />,
      name: "NestJS/NodeJS/Express",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "ReactJS",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "TypeScript/TSX",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "JavaScript/ES6",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "PHP/CakePHP",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "CSS/SCSS",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "Java",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "SQL/NoSQL",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "MongoDB/MySQL/PostgreSQL",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "Docker/Kubernetes",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "AWS",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "Git/GitHub/GitLab/Bitbucket",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "GNU/Linux",
      percentage: 90,
      tag: "backend",
    },
    {
      icon: <FaCheck />,
      name: "Python",
      percentage: 90,
      tag: "backend",
    },
  ];

  return (
    <div className="tech-container">
      <h1 className="text-2xl font-semibold">Web Developer Full Stack</h1>
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
  tag: string;
}

const TechnologiesCard = (props: TechnologiesProps) => (
  <div className="tech-card">
    <div className="tech-icon">{props.icon}</div>
    <div className="tech-name">{props.name}</div>
    <div className="tech-percentage">
      <div
        className="tech-percentage-fill"
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  </div>
);
