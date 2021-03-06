import React from 'react'

export default class CovidData extends React.Component{

    state={
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
        lastUpdate: ""
    }
    
    componentDidMount(){
        fetch('http://covid2019-api.herokuapp.com/v2/total')
        .then(resp=>resp.json())
        .then(data => this.setState({
            confirmed: data.data.confirmed,
            deaths: data.data.deaths,
            recovered: data.data.recovered,
            active: data.data.active,
            lastUpdate: data.dt
        }))
    }
    
    render(){

        
        return(
            <div>
                <div className="marquee">
                    <div>
                        <span>
                            <strong>Confirmed: </strong> {this.state.confirmed.toLocaleString()}
                            <strong>Deaths: </strong> {this.state.deaths.toLocaleString()}
                            <strong>Active: </strong> {this.state.active.toLocaleString()}
                            <strong>Recovered: </strong> {this.state.recovered.toLocaleString()}
                            <strong>Last updated: </strong> {this.state.lastUpdate}
                        </span>
                    </div>
                </div>
                
            </div>
        )
    }
}