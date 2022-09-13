import React from 'react'
import TrollFace from './images/Troll-Face.png'

export const Header = ({countingMeme}) => {
  return (
    <header className='App-header'>
        <div className='header--div'>
          <img src={TrollFace} className="header--img"/>
          <h1 className='header--title'>Meme Generator</h1>
        </div>
        <h3 style={{color:'white',fontFamily:'Inter,sans-serif',fontWeight:100}}>meme{countingMeme==1?'':'s'} generated: {countingMeme}</h3>
        <h3 className='app--course'>React Course - Project 3</h3>
    </header>
  )
}
