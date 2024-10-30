import { Link } from "react-router-dom";
import "./tag-link.scss";

export default function TagLink() {
  const tagLinks = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies" },
    { name: "Works", path: "/works" },
    { name: "Projects", path: "/projects" },
    { name: "Academy", path: "/academy" },
    { name: "Courses", path: "/courses" },
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
