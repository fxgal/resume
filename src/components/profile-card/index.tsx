import React from "react";
import "./profile-card.scss";

export interface ProfileCardProps {
  type: "list" | "grid";
  icon?: React.ReactNode;
  name: string;
  description: string;
  note?: string;
  items?: ProfileListItemsProps[];
}

interface ProfileListItemsProps {
  icon: React.ReactNode;
  name: string;
}

export function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="card-profile bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="card-title">
        <div className="card-icon">{props.icon}</div>
        <div className="card-name">{props.name}</div>
      </div>
      {props.type === "list" ? (
        <ListCard items={props.items} />
      ) : (
        <GridCard {...props} />
      )}
      <div className="background-icon">{props.icon}</div>
    </div>
  );
}

const ListCard = (props: { items?: ProfileListItemsProps[] }) => (
  <div className="card-list">
    {props.items?.map((item, index) => (
      <div key={index} className="card-list-item">
        <div className="card-list-icon">{item.icon}</div>
        <div className="card-list-name">{item.name}</div>
      </div>
    ))}
  </div>
);

const GridCard = (props: ProfileCardProps) => (
  <div className="card-grid">
    <div className="card-description">{props.description}</div>
    <div className="card-note">{props.note}</div>
  </div>
);
