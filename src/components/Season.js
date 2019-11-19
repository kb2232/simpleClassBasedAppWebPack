import React from 'react';

const getSeason = (lat,month)=>{
  if(month > 0 && month < 9)
    return (lat>0)?" summer":"winter";
  else 
    return (lat>0)?"winter":"summer";
}


const Season = (props)=>{
  return(
    <div style={{fontSize:"30px"}}>
      Season Display: 
        <p style={{fontWeight:"600"}}>{getSeason(props.lat, new Date().getMonth())}</p>
    </div>
  )
}

export default Season;