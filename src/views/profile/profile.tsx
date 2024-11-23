import { FaClipboardUser } from "react-icons/fa6";
import { ProfileCard, ProfileCardProps } from "../../components/profile-card";
import { useTranslation } from "react-i18next";
import { FaCheck, FaCode, FaHandshake, FaLanguage } from "react-icons/fa";
import "./profile.scss";

export default function Profile() {
  const { t } = useTranslation();
  const cardsData: ProfileCardProps[] = [
    {
      type: "grid",
      icon: <FaClipboardUser />,
      name: t("professional-profile"),
      description:
        t("profile-description"),
      note: t("profile-note"),
    },
    {
      type: "list",
      icon: <FaCode />,
      name: t("technical-skills"),
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: t("software-architecture"),
        },
        {
          icon: <FaCheck />,
          name: t("hexagonal-architecture"),
        },
        {
          icon: <FaCheck />,
          name: t("event-driven-systems"),
        },
        {
          icon: <FaCheck />,
          name: t("object-oriented-programming"),
        },
        {
          icon: <FaCheck />,
          name: t("design-patterns"),
        },
        {
          icon: <FaCheck />,
          name: t("solid-principles"),
        },
        {
          icon: <FaCheck />,
          name: t("web-development"),
        },
        {
          icon: <FaCheck />,
          name: t("mobile-development"),
        },
        {
          icon: <FaCheck />,
          name: t("api-development"),
        },
        {
          icon: <FaCheck />,
          name: t("microservices-development"),
        },
        {
          icon: <FaCheck />,
          name: t("scalable-applications-development"),
        },
        {
          icon: <FaCheck />,
          name: t("serverless-applications-development"),
        },
        {
          icon: <FaCheck />,
          name: t("composable-applications-development"),
        },
        {
          icon: <FaCheck />,
          name: t("cloud-applications-development"),
        },
        {
          icon: <FaCheck />,
          name: t("mobile-applications-development"),
        },
      ],
    },
    {
      type: "list",
      icon: <FaHandshake />,
      name: t("soft-skills"),
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: t("teamwork"),
        },
        {
          icon: <FaCheck />,
          name: t("effective-communication"),
        },
        {
          icon: <FaCheck />,
          name: t("adaptability"),
        },
        {
          icon: <FaCheck />,
          name: t("proactivity"),
        },
        {
          icon: <FaCheck />,
          name: t("problem-solving"),
        },
        {
          icon: <FaCheck />,
          name: t("critical-thinking"),
        },
        {
          icon: <FaCheck />,
          name: t("leadership"),
        },
        {
          icon: <FaCheck />,
          name: t("empathy"),
        },
      ],
    },
    {
      type: "list",
      icon: <FaLanguage />,
      name: t("languages"),
      description: "",
      items: [
        {
          icon: <FaCheck />,
          name: t("spanish"),
        },
        {
          icon: <FaCheck />,
          name: t("english"),
        },
      ],
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-body">
        {cardsData.map((card, index) => (
          <ProfileCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
