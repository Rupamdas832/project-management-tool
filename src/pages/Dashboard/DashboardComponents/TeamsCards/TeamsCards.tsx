import React from "react";
import { ProfilesType } from "src/types/profileType";
import { emojis } from "src/utils/emojis";
import "./TeamsCards.css";

type TeamCardsPropsType = {
  members: ProfilesType;
};
const TeamCards = ({ members }: TeamCardsPropsType) => {
  return (
    <div className="teamsContainer">
      <p>Team Mood</p>
      {members.map((member) => {
        return (
          <div className="member-item" key={member.id}>
            <div className="member-body">
              <div className="member-image">
                <img src={member.profile_image} alt="profile" />
              </div>
              <div className="member-data">
                <p className="member-name">{member.name}</p>
                <p className="member-desg">{member.designation}</p>
              </div>
            </div>
            <div className="memberMoodElemnet">
              <div className="memberMoodLine">
                <div
                  className="memberMoodEmoji"
                  style={{ width: `${(member.mood * 100 + 25) / 4}%` }}
                >
                  {emojis[member.mood]}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCards;
