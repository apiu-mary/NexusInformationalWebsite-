import React from 'react';
import './style.css';

const TeamMember = ({ imageSrc, name, role }) => {
  return (
    <div className="card" data-testid="team-member">
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
          imageSrc="/images/alice.jpg"
          name="Alice Moraa"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/images/elizabeth.jpg"
          name="Elizabeth Njoroge"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/images/rachel.jpg"
          name="Rachel Tuyishimire"
          role="Software Developer"
        />
      </div>
      <div className="bottom-cards">
        <TeamMember
          imageSrc="/images/maria.jpg"
          name="Mariagoretti Kimani"
          role="Software Developer"
        />
        <TeamMember
          imageSrc="/images/mary.jpg"
          name="Mary Apiu Agou"
          role="Software Developer"
        />
      </div>
    </section>
  );
};

export default Team;
