import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__key">
                {
                    this.props.city && this.props.country && 
                    <p className="weather__key">Location: 
                   <span  className="weather__value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperture && 
                    <p className="weather__key">Temperture: 
                    <span  className="weather__value">{this.props.temperture}</span>
                    </p>
                }
                {
                    this.props.humidity && 
                    <p className="weather__key">Humidity: 
                    <span  className="weather__value">{this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description && 
                    <p className="weather__key">Description: 
                    <span  className="weather__value">{this.props.description}</span>
                    </p>
                }
                { 
                    <p>
                    {this.props.error}
                    </p>
                }
            </div>
        );
    }

};

export default Weather;
