import React from 'react';
import Season from './Season';
class App extends React.Component{

  constructor(props){
    console.log({
      props
    })
    super(props);
    this.state = {
      lati:"loading...",
      longi:"loading...",
      errMessage:null
    }
  }

  render(){
    if (this.state.errMessage===null){
        return(
          <div className="component">
            <Season lat={this.state.lati} longi={this.state.longi} />
          </div>
        )
    } else {
      return(
        <div className="component">
          ERROR: {this.state.errMessage}
        </div>
      )
    }
  }

componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position =>{
      this.setState({lati:position.coords.latitude}),
      this.setState({longi:position.coords.longitude})
    },
    err =>{
      this.setState({errMessage:err.message})
    }
  )
}

}
export default App;