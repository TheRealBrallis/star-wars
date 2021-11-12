import React, { useState } from 'react'
import '../People.css';

function People({ character }) {
  const [show, setShow] = useState(false);
  return (
    <div id='container'>
      <div>
        <li className={`char-con ${show ? 'glow' : ''}`} onClick={() => setShow(!show)}>
          <p>{character.name}</p>
          {show &&
            <div className='char-info'>
              <p>Gender: {character.gender}</p>
              <p>Hair color: {character.hair_color}</p>
              <p>Eye color: {character.eye_color}</p>
              <p>Birth year: {character.birth_year}</p>
            </div>
          }
        </li>
      </div>
    </div>
  )
}

export default People
