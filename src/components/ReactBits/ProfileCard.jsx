import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({
  avatarUrl = "",
  name = "Team Member",
  role = "Position",
  handle = "username",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
}) => {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src={avatarUrl} alt={name} />
        </div>
        <div className="profile-info">
          <h3>{name}</h3>
          <p>{role}</p>
          {showUserInfo && (
            <div className="profile-details">
              <span className="profile-handle">@{handle}</span>
              <span className={`profile-status ${status.toLowerCase()}`}>{status}</span>
            </div>
          )}
          <button className="profile-contact" onClick={onContactClick}>
            {contactText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
