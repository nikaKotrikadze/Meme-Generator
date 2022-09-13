import React,{useState, useEffect} from 'react'

export const Meme = ({handleMemeCount}) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(resp=>resp.json())
      .then(data=>setAllMemeImages(data)) 
    },[])

    const handleMeme = () => {
        const meme = allMemeImages.data.memes
        const randNum = Math.floor(Math.random()*meme.length)
        const url = meme[randNum].url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
      handleMemeCount()
    }

    const handleChange = ({target}) => {
      const {value, name} = target;
      setMeme(prev=>{
        return {
          ...prev,
          [name]:value
        }
      })
    }

  return (
    <main className='main'>
        <div className='meme'>
            <input type='text' placeholder='shut up' onChange={handleChange} name="topText" value={meme.topText}/>
            <input type='text' placeholder='and take my money' onChange={handleChange} name="bottomText" value={meme.bottomText}/>
            <button className='meme--btn' onClick={handleMeme}>Get a new meme image  🖼</button>
        </div>
        <div className='main--meme--div'>
          <img src={meme.randomImage} className="meme--image"/>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}
