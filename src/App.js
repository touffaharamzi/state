import './App.css';
import React from "react";
import Profile from './Profile';
class Welcome extends React.Component {
state = {
    fullName: "Ramzi"
    ,bio: "i'm 24 from Gabes live in Sfax "
    ,imgSrc :"./cat.jpg"
    ,profession :"software tester"
    ,show : false,
    count : 0
  };
show=()=>{
  this.setState({show: !this.state.show})
}
 interval = setInterval(() => {this.setState({count :this.state.count +1})},1000);
  
  render() {
  return( 
      <div className='App'>
        <button onClick={this.show}> show profile</button>
        {this.state.show &&(
        <Profile
          fullName={this.state.fullName}
          bio={this.state.bio}
          profession={this.state.profession}
          count={this.state.count}
        />
      )}
      <h1></h1>
      </div>
    );
  }
}
export default Welcome;

