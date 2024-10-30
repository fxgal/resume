import { Link } from "react-router-dom";
import "./tag-link.scss";

export default function TagLink() {
  const tagLinks = [
    { name: "Home", path: "/resume/" },
    { name: "Technologies", path: "/resume/technologies" },
    { name: "Works", path: "/resume/works" },
    { name: "Projects", path: "/resume/projects" },
    { name: "Academy", path: "/resume/academy" },
    { name: "Certificates", path: "/resume/certificates" },
  ];
  return (
    <div className="tag-links flex flex-wrap justify-center">
      {tagLinks.map((tagLink) => (
        <Link to={tagLink.path} className="tag-link hover:bg-gray-50">
          {tagLink.name}
        </Link>
      ))}
    </div>
  );
}
