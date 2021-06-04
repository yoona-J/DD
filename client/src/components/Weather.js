import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';


class Weather extends Component {
    constructor(props) {
      super(props);
      this.state = { temp: 0, desc: '', icon: '', loading: true }
      console.log(1)
    }
    //component - weather
    componentDidMount() {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=seoul,KR&APPID=541eba8176d40b5ac7d8910236b72c33&&units=metric`
  
      //axios library
      axios.get(url)
        .then(responseData => {
          console.log(responseData);
          const data = responseData.data;
          this.setState ({
            temp: data.main.temp,
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
            loading: false
          });
        })
        .catch (error =>
          console.log(error)
          );
    }


    //weather info
    render() {
      //const imgSrc = '/sun-3000997_1280.png'
      if (this.state.loading) {
        return <p>Loading</p>;
      } else {
        return (
          <div className = "WeatherDiv">
              <br />
            {/* <img src = {require ('../img/sun-3000997_1280.jpg')}/> */}
            <p>{this.state.temp}C</p>
            <p>현재 날씨 : {this.state.desc}</p>
          </div>
        );
      }
    }
  }

export default Weather;