import React, { useState } from 'react';
import "./Team.css"

import atanuImg from '../assets/atanu.jpg';
import babinImg from '../assets/babin.jpg';
import developer from '../assets/rohit.jpg';
import sagnikImg from '../assets/sagnik.jpg';

const teamData = [
  { id: 1, name: 'Atanu Saha', role: 'Frontend Specialist', img: atanuImg, description: 'Atanu is the wizard who translates designs into pixel-perfect, interactive web experiences...' },
  { id: 2, name: 'Babin Bid', role: 'Designer (UI/UX)', img: babinImg, description: 'Babin is the creative eye of the team, focusing on user-centric designs...' },
  { id: 3, name: 'Rohit Kumar Adak', role: 'Developer (Backend)', img: developer, description: 'Rohit builds the powerful, scalable server-side logic that makes everything tick...' },
  { id: 4, name: 'Sagnik Bachhar', role: 'Researcher', img: sagnikImg, description: 'Sagnik is the data guru, diving deep into research and analysis...' },
];

const Team = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const selectedMember = teamData.find(m => m.id === selectedMemberId);

  return (
    <section id="team" className={selectedMemberId ? 'detail-view-active' : ''}>
      <h2>The Spiders</h2>

      <div className="container team__layout-container">

        <div className="team__detail-description">
          {selectedMember && (
            <>
              <h4>About {selectedMember.name.split(' ')[0]}</h4>
              <p>{selectedMember.description}</p>
              <small>Click the card again to go back..</small>
            </>
          )}
        </div>

        <div className="team__container">
          {teamData.map(member => (
            <article
              key={member.id}
              className={`
                glass-card team-member 
                ${selectedMemberId === member.id ? 'selected' : ''}
                ${selectedMemberId && selectedMemberId !== member.id ? 'not-selected' : ''}
              `}

              onClick={() =>
                selectedMemberId === member.id
                  ? setSelectedMemberId(null) 
                  : setSelectedMemberId(member.id) 
              }
            >
              <div className="team-member__image">
                <img src={member.img} alt={member.name} />
              </div>
              <h5>{member.name}</h5>
              <h6>{member.role}</h6>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;