import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./tag-link.scss";

export default function TagLink() {
  const { t } = useTranslation();
  const tagLinks = [
    { name: "home", path: "/resume/" },
    { name: "technologies", path: "/resume/technologies" },
    { name: "works", path: "/resume/works" },
    { name: "projects", path: "/resume/projects" },
    { name: "academy", path: "/resume/academy" },
    { name: "certificates", path: "/resume/certificates" },
  ];
  return (
    <div className="tag-links flex flex-wrap justify-center">
      {tagLinks.map((tagLink) => (
        <Link key={tagLink.name} to={tagLink.path} className="tag-link hover:bg-gray-50">
          {t(tagLink.name)}
        </Link>
      ))}
    </div>
  );
}
