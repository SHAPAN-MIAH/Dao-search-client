import React from 'react';
import './StartGame.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFire, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import congratulationImg from '../../img/congratulation.jpg'
import troffeImg from '../../img/1986987.png'

import Confetti from 'react-confetti'

const StartGame = () => {

  const gameHandler = () => {
    const gameOptions = document.querySelector('.gameOptions')
    const gameTitle = document.querySelector('.gameTitle')
    const gameOptionsContainer = document.querySelector('.game-options-container')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')

    const firstCorrectAnsContainer = document.querySelector('.firstCorrectAns-container')

    gameTitle.style.display = "none";
    gameOptionsContainer.innerHTML = "";
    gameOptions.style.display = "none";
    progressbar1.style.display = "none";
    pts.style.display = "none";

    firstCorrectAnsContainer.style.display = "block"
  }
  const gameHandler2 = () => {
    const GOptions = document.querySelector('.G-options')
    const gameTitle = document.querySelector('.gameTitle')
    const gameOptions = document.querySelector('.game-options-container')
    const inCorrectResult = document.querySelector('.inCorrectResult')
    const firstInCorrectAnsContainer = document.querySelector('.firstInCorrectAns-container')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')

    gameTitle.innerHTML = "";
    gameOptions.innerHTML = "";
    GOptions.style.display = "none";
    progressbar1.style.display = "none";
    pts.style.display = "none";
    inCorrectResult.innerHTML = "Incorrect!<br/>Your earn point is 0."
    firstInCorrectAnsContainer.style.display = 'block'
  }

  const NextQuizHandler = () => {
    const gameTitle = document.querySelector('.gameTitle')
    const firstCorrectAnsContainer = document.querySelector('.firstCorrectAns-container')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')

    gameTitle.innerHTML = "What is DAO?"
    gameTitle.style.display = "block"
    firstCorrectAnsContainer.style.display = "none"

    gameNextOptionsContainer.style.display = "block"
    nextGameOptions1.style.display = "block"
    nextGameOptions2.style.display = "block"
    or.style.display = "block"
    progressbar1.style.display = "block";
    pts.style.display = "block";

  }

  const FirstInCorrectNextQuizHandler = () => {
    const firstInCorrectAnsContainer = document.querySelector('.firstInCorrectAns-container')
    const gameTitle = document.querySelector('.gameTitle')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')

    firstInCorrectAnsContainer.style.display = 'none'

    gameTitle.innerHTML = "What is DAO?"
    gameTitle.style.display = "block"
    gameNextOptionsContainer.style.display = "block"
    nextGameOptions1.style.display = "block"
    nextGameOptions2.style.display = "block"
    or.style.display = "block"
    progressbar1.style.display = "block";
    pts.style.display = "block";
  }

  const nextGameHandler  = () =>{
    const gameTitle = document.querySelector('.gameTitle')
    const secondCorrectAnsContainer = document.querySelector('.secondCorrectAns-container')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')

    secondCorrectAnsContainer.style.display = "block"
    gameTitle.style.display = "none"
    gameNextOptionsContainer.style.display = "none"
    nextGameOptions1.style.display = "none"
    nextGameOptions2.style.display = "none"
    or.style.display = "none"
    progressbar1.style.display = "none";
    pts.style.display = "none";
  }
  
  const nextGameHandler2  = () =>{
    const gameTitle = document.querySelector('.gameTitle')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')
    const progressbar1 = document.querySelector('#progressbar1')
    const pts = document.querySelector('.pts')
    const secondInCorrectAnsContainer = document.querySelector('.secondInCorrectAns-container')
    const secondInCorrectResult = document.querySelector('.secondInCorrectResult')

    gameNextOptionsContainer.innerHTML = ""
    gameTitle.innerHTML = ""
    nextGameOptions1.style.display = "none"
    nextGameOptions2.style.display = "none"
    or.style.display = "none"
    progressbar1.style.display = "none";
    pts.style.display = "none";
    secondInCorrectAnsContainer.style.display = 'block'
    secondInCorrectResult.innerHTML = "Incorrect!<br/>Your earn point is 0."
    
  }

  const SecondInCorrectNextQuizHandler = () => {
    const gameOverContainer = document.querySelector('.gameOver-container')
    const secondInCorrectAnsContainer = document.querySelector('.secondInCorrectAns-container')
    const gameTitle = document.querySelector('.gameTitle')

    gameOverContainer.style.display = "block"
    secondInCorrectAnsContainer.style.display = 'none'
    gameTitle.style.display = 'none'
  }

  const gameOverHandler = () => {
    const secondCorrectAnsContainer = document.querySelector('.secondCorrectAns-container')
    const gameOverContainer = document.querySelector('.gameOver-container')

    secondCorrectAnsContainer.style.display = "none"
    gameOverContainer.style.display = "block"
  }

  
  const createProgressbar = (id, duration, callback) => {
    const progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
  
    const progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    progressbarinner.style.animationDuration = duration;
  
    progressbar.appendChild(progressbarinner);
    progressbarinner.style.animationPlayState = 'running';
  }
  
  window.addEventListener('load', () => {
    createProgressbar('progressbar1', '20s');
  });



  return (
    <div className='playGame-container'>
      
      <p  className='closeGame'><a className=' timesIcon' href="/game"><FontAwesomeIcon icon={faTimes} /></a></p>
      
      <div className='mt-3'>
        <div className='d-flex'>
          <h2 className='gameTitle'>When the announcement of DAO is made?</h2>
          <span className=' pts'>100 pts</span>
        </div>
        
        <div id='progressbar1'></div>

            <div className='mt-5 d-flex justify-content-center game-options-container'>
              <div onClick={gameHandler2} className='G-options gameOptions'>
                <p>May, 2015</p>
              </div>

              <h6>OR</h6>

              <div onClick={gameHandler} className='G-options gameOptions'>
                <p>May, 2016</p>
              </div>
            </div>

            <div className='firstCorrectAns-container mt-5'>
              <div className='heartIcons'>
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
              </div>
              <div className='firstCorrectAns-content'>
                <h1 className='points'>100</h1>
                <h5>Points</h5>

                <button onClick={NextQuizHandler} className='firstCorrectAnsNext-btn' type="">Continue</button>
              </div>
            </div>

            <div className='firstInCorrectAns-container'>
              <h2 className='inCorrectResult'></h2>
              <a href="/game"><button className='firstCorrectAnsNext-btn' type="">Play Again</button></a>
              <button onClick={FirstInCorrectNextQuizHandler} className='firstInCorrectAnsNext-btn' type="">Continue</button>
            </div>


            <div className='d-flex justify-content-center game-nextOptions-container'>
              <div onClick={nextGameHandler} className='next_gameOptions1'>
                <p>Decentralized  Autonomous  Organization</p>
              </div>

              <h6 className='or'>OR</h6>

              <div onClick={nextGameHandler2} className='next_gameOptions2'>
                <p>Diamine  Oxidase Activity</p>
              </div>
            </div>


            <div className='secondCorrectAns-container mt-5'>
              <div className='heartIcons'>
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
                <FontAwesomeIcon className='heartIcon' icon={faHeart} />
              </div>
              <div className='firstCorrectAns-content'>
                <h1 className='points'>100</h1>
                <h5>Points</h5>

                <button onClick={gameOverHandler} className='firstCorrectAnsNext-btn' type="">Continue</button>
              </div>
            </div>

            <div className='secondInCorrectAns-container'>
              <h2 className='secondInCorrectResult'></h2>
              <a href="/game"><button className='firstCorrectAnsNext-btn' type="">Play Again</button></a>
              <button onClick={SecondInCorrectNextQuizHandler} className='firstInCorrectAnsNext-btn' type="">Continue</button>
            </div>

            <div className='gameOver-container  mt-5'>
            <Confetti/>
                <div className='d-flex justify-content-center'>
                  <div>
                    <h1 className='gameOver-title'>Game Over</h1>

                    <div className='gameOver-content'>
                      <h1 className='points'>200</h1>
                      <h5 >Points</h5>
                      <h2>Amazing Well Played!! <img width={50} src={troffeImg} alt=""/></h2>
                      
                    </div>
                  </div>
                </div>
                <a href="/game"><button className='firstCorrectAnsNext-btn' type="">Play Again</button></a>
            </div>

          </div>
          <p className='mt-5 text-white' style={{cursor: 'pointer'}}>Learn More</p>
          
    </div>
  );
};

export default StartGame;