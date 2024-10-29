import { FaClipboardUser } from "react-icons/fa6";
import { ProfileCard, ProfileCardProps } from "../../components/profile-card";
import "./profile.scss";
import { FaCheck, FaCode, FaHandshake, FaLanguage } from "react-icons/fa";

export default function Profile() {
  const cardsData: ProfileCardProps[] = [
    {
      type: "grid",
      icon: <FaClipboardUser />,
      name: "Profile",
      description:
        "Ingeniero en Informática y desarrollador Full Stack con más de 14 años de experiencia en el desarrollo de soluciones tecnológicas avanzadas para procesamiento automatizado de información, e-commerce y plataformas de alta demanda. Especialista en arquitecturas modernas como microservicios, serverless, event-driven, y composable. Destacado en la implementación de APIs REST, sistemas en tiempo real y aplicaciones escalables. Enfocado en metodologías ágiles, aplicando principios SOLID y patrones de diseño de software para asegurar código robusto y adaptable. Profesional proactivo, orientado a objetivos, colaborativo y adaptable a nuevas tecnologías y lenguajes de programación.",
      note: "Actualmente profundizo en Prompt Engineering e integración con modelos de IA generativa (LLMs)",
    },
    {
      type: "list",
      icon: <FaCode />,
      name: "Habilidades técnicas",
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: "Arquitectura de software",
        },
        {
          icon: <FaCheck />,
          name: "Arquitectura de hexagonal",
        },
        {
          icon: <FaCheck />,
          name: "Sistemas event-driven",
        },
        {
          icon: <FaCheck />,
          name: "Programación orientada a objetos",
        },
        {
          icon: <FaCheck />,
          name: "Patrones de diseño",
        },
        {
          icon: <FaCheck />,
          name: "Principios SOLID",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo web",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo móvil",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de APIs",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de microservicios",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de aplicaciones escalables",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de aplicaciones serverless",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de aplicaciones composable",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de aplicaciones en la nube",
        },
        {
          icon: <FaCheck />,
          name: "Desarrollo de aplicaciones móviles",
        },
      ],
    },
    {
      type: "list",
      icon: <FaHandshake />,
      name: "Habilidades blandas",
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: "Trabajo en equipo",
        },
        {
          icon: <FaCheck />,
          name: "Comunicación efectiva",
        },
        {
          icon: <FaCheck />,
          name: "Adaptabilidad",
        },
        {
          icon: <FaCheck />,
          name: "Proactividad",
        },
        {
          icon: <FaCheck />,
          name: "Resolución de problemas",
        },
        {
          icon: <FaCheck />,
          name: "Pensamiento crítico",
        },
        {
          icon: <FaCheck />,
          name: "Liderazgo",
        },
        {
          icon: <FaCheck />,
          name: "Empatía",
        },
      ],
    },
    {
      type: "list",
      icon: <FaLanguage />,
      name: "Idiomas",
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: "Español (nativo)",
        },
        {
          icon: <FaCheck />,
          name: "Inglés (A2-B1)",
        },
      ],
    },
  ];

  return (
    <div className="profile-container">
      <h1 className="text-2xl font-semibold">Web Developer Full Stack</h1>
      <div className="profile-body">
        {cardsData.map((card, index) => (
          <ProfileCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
