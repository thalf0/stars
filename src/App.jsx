import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function App({numberOfStars = 5}) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    // console.log(getCurrentIndex);
    setHover(rating)
  }

  return (
    <div className='container'>
      <h1>Rate Me Here</h1>
      <div className="star-rating">
        {
          [...Array(numberOfStars)].map((_, index) => {
            index += 1
          
            return (
            <FaStar 
              key={index}
              className={
                index <= (hover || rating) 
                ? 'active' 
                : 'inactive'
              }
              onClick={() => handleClick(index)} 
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={30}
            />
            )
          })
        }
      </div>
    </div>
  )
}