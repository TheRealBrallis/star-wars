import React, { useState, useEffect } from 'react'
import People from './People';
import '../People.css';

function Characters() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);
  const [prev, setPrev] = useState('');
  const url = search.length > 0 ? `https://swapi.dev/api/people/?search=${search}` : 'https://swapi.dev/api/people/';
  useEffect(() => {
    fetchAllCharacters(url);
  }, [url])

  const fetchAllCharacters = async (url) => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 900);
    try {
      console.time('request time');
      const res = await fetch(url);
      const data = await res.json();
      setPeople(data.results);
      clearTimeout(timer);
      setLoading(false);
      setNext(data.next);
      setPrev(data.previous);
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="star-background">
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <div id="wrapper">
        <h1>Star wars</h1>
        <input className='input-glow' type='text' placeholder='Search...' onChange={handleChange} value={search} />
        <div className='people-con'>
          {loading ?
            <div id='loading-bar'><p>Loading...</p></div>
            : <ul>
              {people.map((character, index) => (
                <People key={index} character={character} />
              ))}
            </ul>
          }
        </div>

        <div id='pagination'>
          <button id="prev" className={prev === null ? 'disabled' : 'active'} onClick={() => fetchAllCharacters(prev)} disabled={prev === null ? true : false}>prev</button>
          <button id="next" className={next === null ? 'disabled' : 'active'} onClick={() => fetchAllCharacters(next)} disabled={next === null ? true : false}>next</button>
        </div>
      </div>
    </div>
  )
}

export default Characters
