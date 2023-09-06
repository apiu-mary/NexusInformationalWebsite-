import React from 'react';
import './style.css';
const TeamMember = ({ imageSrc, name, role }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="member-image" />
      <h2 className="member-name">{name}</h2>
      <p className="member-role">{role}</p>
    </div>
  );
};
const Team = () => {
  return (
    <section className="team-section">
      <h1 className="team-title">Our Team</h1>
      <div className="top-cards">
        <TeamMember
          imageSrc="/img/images/alice.jpg"
          name="Alice Moraa"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/img/images/elizabeth.jpg"
          name="Elizabeth Njoroge"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/img/images/rachel.jpg"
          name="Rachel Tuyishimire"
          role="Software Developer"
        />
      </div>
      <div className="bottom-cards">
        <TeamMember
          imageSrc="/img/images/maria.jpg"
          name="Mariagoretti Kimani"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/img/images/mary.jpg"
          name="Mary Apiu Agou"
          role="Software Developer"
        />
      </div>
    </section>
  );
};
export default Team;