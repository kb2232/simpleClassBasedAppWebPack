import React from 'react';

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

  render(){
    if (this.state.errMessage===null){
        return(
          <div className="component">
            LATITUDE: {this.state.lati}
            <br />
            LONGITUDE: {this.state.longi}
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
}
export default App;