
import { useState } from 'react'

const Button = ({ category, handleFilter }) => {
  const [ isClicked, setIsClicked ] = useState(false)

  const handleBtnClass = (value) => {
    setIsClicked(!isClicked)
    handleFilter(value)
    
  }

    return (
      <button className={ isClicked ? "selected" : "" } onClick={()=> handleBtnClass(category)}>{ category }</button>
    )
}

export default Button