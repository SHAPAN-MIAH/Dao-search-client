import React, { useState } from 'react';
import logo from '../../img/flc_design2022040917829.png'
import gameIcon from '../../img/Google_Play_Games_icon.png'
import './Home.css';
import ResultContent from './../ResultContent/ResultContent';
import axios from 'axios';



const Home = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const qry = e.target.search.value;


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
    <div>
      <div className='container'>
        
        <div className='text-center mt-5 pt-5'>
          <img width={200} src={logo} alt=""/>

          <h2 className='title mt-5'>Discover DAO Network</h2>
          <div className=' mt-4'>
            <form  className='search-container' onSubmit={handleSubmit}>
              <input type="text" name='search' placeholder="Search....." className="form-control shadow-none searchInput"  />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className='another-search-link'>
            <a href="/searchByCategory">DAO search by category</a>
            <a href="/DAOsocialGraphSearch">DAO social graph search</a>
            <a href="/latestPostOfDAO">See latest post of DAO</a>
            <a href="/game">
              <img width={30} src={gameIcon} alt=""/>
            </a>
          </div>
          <div className='mt-5 Dao-text'>
            <h5>DAO Search is a social network/search engine for DAO built on the blockchain. <br/>
              Search and explore it's posts, people and connections.
            </h5>
          </div>
          
          <div id='results-content'>
            {
              results?.map((result, index) => <ResultContent key={index} result={result}></ResultContent>)
            }
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;