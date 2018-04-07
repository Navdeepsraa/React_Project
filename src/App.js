import React,{Component} from 'react';
import {robots} from './robots.js'
import CardList from './CardList'
import Search from './Search'
import Scroll from './Scroll'


class App extends Component
{
  constructor()
  {
    super()
    this.state={
      robots : robots,
      searchfield : ''
    }
  }

onSearchChange =(event)=>
{
  this.setState({searchfield:event.target.value})

  //this.setState({robots:filterrobo});
}

  render(){
    const filterrobo1=this.state.robots.filter(robots =>
    {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return(
    <div className='tc'>
    <h1>ROBO-FRIENDS</h1>
    <Search searchChange={this.onSearchChange}/>
    <Scroll>
    <CardList robots={filterrobo1}/>
    </Scroll>
    </div>
  );}
}
export default App;
