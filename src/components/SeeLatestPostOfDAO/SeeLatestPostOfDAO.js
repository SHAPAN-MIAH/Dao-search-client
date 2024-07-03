import React, { useState } from 'react';
import './SeeLatestPostOfDAO.css'
import ResultContent from './../ResultContent/ResultContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SeeLatestPostOfDAO = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    const qry = e.target.search.value;
    // const url = `http://api.serpstack.com/search?access_key=ac9aa0cf83ebc78f4f6c821b76856f56&query=${qry}`

    // fetch(url)
    // .then(res => res.json())
    // .then(data => setResults(data.organic_results))

    e.preventDefault()
    const apiKey = 'AIzaSyCTGI5kgFZ4hVY9hKzmQ8grf3g3wL0h42w';
    const searchEngineId = '2361a7df82b934f42';
      
    axios(`https://www.googleapis.com/customsearch/v1?q=${qry}&key=${apiKey}&cx=${searchEngineId}`)
    .then((response) => {
      setResults(response.data.items);

    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='container'>
      <p  className='backBtn mt-5'><a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</a></p>
      <h2 className='title text-center mt-5'>See latest post of DAO</h2>
          <div className=' mt-4 mb-5'>
          {/* <div className="gcse-search"></div> */}
          <form  className='search-container' onSubmit={handleSubmit}>
              <input type="text" name='search' placeholder="Search....." className="form-control shadow-none searchInput"  />
              <button type="submit">Search</button>
            </form>
          </div>

          <div id='results-content'>
            {
              results.map((result, index) => <ResultContent key={index} result={result}></ResultContent>)
            }
          </div>
          
    </div>
  );
};

export default SeeLatestPostOfDAO;