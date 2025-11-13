import React from 'react';

// Placeholder data
const teamData = [
  { id: 1, name: 'Alex Arachne', role: 'Lead Weaver (CEO)', img: 'https://picsum.photos/seed/person1/200/200' },
  { id: 2, name: 'Mia Spinneret', role: 'Head of Design (UI/UX)', img: 'https://picsum.photos/seed/person2/200/200' },
  { id: 3, name: 'Leo Silk', role: 'Lead Developer (Backend)', img: 'https://picsum.photos/seed/person3/200/200' },
  { id: 4, name: 'Sam Orb', role: 'Frontend Specialist', img: 'https://picsum.photos/seed/person4/200/200' },
];

const Team = () => {
  return (
    <section id="team">
      <h2>The Spiders</h2>
      <div className="container team__container">
        {teamData.map(member => (
          <article key={member.id} className="glass-card team-member">
            <div className="team-member__image">
              <img src={member.img} alt={member.name} />
            </div>
            <h5>{member.name}</h5>
            <h6>{member.role}</h6>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;