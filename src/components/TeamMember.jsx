import React from 'react';

const TeamMember = ({ name, code, role, description }) => (
  <div className="team-member">
    <div className="member-icon">
      <i className="fas fa-user"></i>
    </div>
    <h3 className="member-name">{name}</h3>
    <p className="member-role">{code}</p>
    <p>{description}</p>
  </div>
);

export default TeamMember;