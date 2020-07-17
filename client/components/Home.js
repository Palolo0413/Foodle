import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <img src="/FOODLEHOME4.png" className="home-image" />
        {/* <h2 className="subtitle">
            Create and plan an event with friends
          </h2> */}
        <div className="hero-content is-centered">
          <Link to="/home">
            <button
              type="button"
              className="button button-color is-large is-centered ml-12"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
