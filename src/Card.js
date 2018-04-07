import React from 'react';
const Card = ({id,name,email}) =>
{
  return(
      <div className='tc bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?100x100`} alt='pic' width='200' height='200'/>

      <div>
      <h3>{name}</h3>
      <p>{email}</p>
      </div>
      </div>
  );
}
export default Card;
