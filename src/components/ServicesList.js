import React from 'react'
import axios from 'axios'
import image from '../assets/logo.png'

class ServicesList extends React.Component {

  state = {
    tubes: []
  }

  async componentDidMount() {
    console.log('I just mounted')
    const res = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
    console.log(res.data)
    this.setState({ tubes: res.data })
  }

  render() {
    return (
      <section className="ServicesList">

        <div className="nav">
          <img src={image} alt="logo" />
        </div>

        <div className="heading">
          <h1>Status updates</h1>
          <p>Tube, Overground, Rail, DLR & Tram</p>
        </div>

        <div>
          {this.state.tubes.map(tube => {
            return (

              <div key={tube._id} className="service">

                <div className="serviceName" id={tube.id}>
                  <p>{tube.name}</p>
                </div>

                <div className="serviceStatus">
                  <p>{tube.lineStatuses[0].statusSeverityDescription}</p>
                </div>

              </div>

            )
          })}
        </div>

      </section>
    )
  }

}

export default ServicesList