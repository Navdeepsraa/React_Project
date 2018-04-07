import React from 'react';
const Search = ({searchfield,searchChange}) =>
{
  return(
    <div >
    <input type='search'
    placeholder='enter robo name'
    className='bg-light-green ma3 pa3'
    onChange={searchChange}
    />
    </div>
  );
}
export default Search
