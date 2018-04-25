import React from "react";
import Titles from "./components/titles.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";

const API_KEY = "70d368f1fc63f4d0014c5b1907372cee";
//efc46979fd28d35d01a7b0dd621cd2c8
// initializing a component
class App extends React.Component {
  //r functions allows you to use the this keyword independently
  state = {
    temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_CALL.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a correct value"
      });
    }
  }


  // render methods returnd a jsx(looks like html but its a javascript code runing in the background)
  render() {
    //you cant return another parent element only one is allowed
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperture={this.state.temperture}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App;

