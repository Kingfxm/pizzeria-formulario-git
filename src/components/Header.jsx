import React from 'react'

function Header({title, descripcion}) {
  return (
    <div className='header' style={{paddingTop:"120px", paddingBottom:"120px", fontFamily:"fantasy", textAlign:"right", color:"white"}}>
      <h1 style={{paddingRight:"8%"}}>{title}</h1>
      <h5 style={{paddingRight:"8%", paddingBottom:"20px"}}>{descripcion}</h5>
    </div>
  )
}

export default Header
