import React from "react";
import ProfileData from "../profile-data";
import TagLink from "../tag-link/tag-link";
import "./sidebar.scss";
import SocialMediaLink from "../social-media-link";

const Sidebar: React.FC = (props) => {
  return (
    <div className="sidebar row-span-full" {...props}>
      <ProfileData />
      <div className="sidebar-footer">
        <SocialMediaLink />
        <TagLink />
      </div>
    </div>
  );
};

export default Sidebar;
