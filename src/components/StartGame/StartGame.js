import React from 'react';
import './StartGame.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFire, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import congratulationImg from '../../img/congratulation.jpg'
import troffeImg from '../../img/1986987.png'

// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const StartGame = () => {
  // const { width, height } = useWindowSize()

  const gameHandler = () => {
    const gameOptions = document.querySelector('.gameOptions')
    const gameTitle = document.querySelector('.gameTitle')
    const gameOptionsContainer = document.querySelector('.game-options-container')

    const firstCorrectAnsContainer = document.querySelector('.firstCorrectAns-container')

    gameTitle.style.display = "none";
    gameOptionsContainer.innerHTML = "";
    gameOptions.style.display = "none";

    firstCorrectAnsContainer.style.display = "block"

    // gameOptions.innerHTML = "Amazing!<br/>Your earn point is 100"
    // gameOptions.style.color = "lightGreen"
  }
  const gameHandler2 = () => {
    const GOptions = document.querySelector('.G-options')
    const gameTitle = document.querySelector('.gameTitle')
    const gameOptions = document.querySelector('.game-options-container')

    gameTitle.innerHTML = "";
    GOptions.style.display = "none";
    gameOptions.innerHTML = "Incorrect!<br/>Your earn point is 0 <br/> Play Again."
  }

  const NextQuizHandler = () => {
    const gameTitle = document.querySelector('.gameTitle')
    const firstCorrectAnsContainer = document.querySelector('.firstCorrectAns-container')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')

    gameTitle.innerHTML = "What is DAO?"
    gameTitle.style.display = "block"
    firstCorrectAnsContainer.style.display = "none"

    gameNextOptionsContainer.style.display = "block"
    nextGameOptions1.style.display = "block"
    nextGameOptions2.style.display = "block"
    or.style.display = "block"

  }

  const nextGameHandler  = () =>{
    const gameTitle = document.querySelector('.gameTitle')
    const secondCorrectAnsContainer = document.querySelector('.secondCorrectAns-container')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')

    secondCorrectAnsContainer.style.display = "block"
    gameTitle.style.display = "none"
    gameNextOptionsContainer.style.display = "none"
    nextGameOptions1.style.display = "none"
    nextGameOptions2.style.display = "none"
    or.style.display = "none"
  }
  
  const nextGameHandler2  = () =>{
    const gameTitle = document.querySelector('.gameTitle')
    const gameNextOptionsContainer = document.querySelector('.game-nextOptions-container')
    const nextGameOptions1 = document.querySelector('.next_gameOptions1')
    const nextGameOptions2 = document.querySelector('.next_gameOptions2')
    const or = document.querySelector('.or')

    gameNextOptionsContainer.innerHTML = "Incorrect!<br/>Your earn point is 0 <br/> Play Again."
    gameTitle.innerHTML = ""
    nextGameOptions1.style.display = "none"
    nextGameOptions2.style.display = "none"
    or.style.display = "none"
  }

  const gameOverHandler = () => {
    const secondCorrectAnsContainer = document.querySelector('.secondCorrectAns-container')
    const gameOverContainer = document.querySelector('.gameOver-container')

    secondCorrectAnsContainer.style.display = "none"
    gameOverContainer.style.display = "block"
  }
  
  return (
    <div className='playGame-container'>
      
      <p  className='closeGame'><a className=' timesIcon' href="/game"><FontAwesomeIcon icon={faTimes} /></a></p>
      <h2 className='gameTitle'>When the announcement of DAO is made?</h2>
      <div className='mt-5'>
            <div className='d-flex justify-content-center game-options-container correctResult'>
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

            <div className='gameOver-container  mt-5'>
            <Confetti/>
                <div className='d-flex justify-content-center'>
                  {/* <div className='congratulation'>
                    <h1>   Well Played! <img width={50} src={congratulationImg} alt=""/></h1>
                    
                  </div> */}
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