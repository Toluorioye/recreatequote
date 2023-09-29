import React, { useEffect, useState } from 'react';
import "./Quote.css"
import axios from 'axios';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Axios = () => {
  const [quote, setQuote] = useState([])
const generateRandom = () =>{
  axios.get("https://api.quotable.io/random")
  .then(res => {
    setQuote(res.data)
    console.log(res.data)
  })
  .catch(err => {console.log(err)})
}
  useEffect(() => {
    generateRandom()
  }, [])
  return (
    <div className='quote'> 
    <p className='greetings'><span>Howdy </span>from TOLULOPE <span>😚</span></p>
      <div className='quotecontent'>
        <p className='quotetext'>
           {/* <FormatQuoteIcon/> */}
           {quote.content}
        </p>
        <div className='quotesupptext'>
          <p className='quoteauthor'>
            ~ {quote.author}
          </p>
          <p className='date'>{quote.dateAdded}</p>
        </div>
      </div>
      
      <button className='quotebtn' onClick={generateRandom}>
        Get Quote
      </button>
    </div>
  )
}

export default Axios