import React from "react";
import { Button } from 'react-bootstrap';

function validate(city, country) {
    // true means invalid, so our conditions got reversed
    return {
      city: city.length === 0,
      country: country.length === 0,
    };
  }

class Form extends React.Component {
    render() {
        return (
           <form onSubmit = {this.props.getWeather}>
               <input type="text" name="city" placeholder="City...." required/>
               <input type="text" name="country" validate placeholder="Country...." required/>
               <button className="btn-warning">Get weather</button>
           </form>
        );
    }

};

export default Form;