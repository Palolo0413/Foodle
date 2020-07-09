import React, {Component} from 'react'
import {ChoiceModal} from './ChoiceModal'

export class SuggestionChoices extends Component {
  constructor() {
    super()
    this.state = {
      modalState: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState((prev) => {
      const newState = !prev.modalState
      return {modalState: newState}
    })
  }

  render() {
    const {randomRestaurant, getRestaurantInfo, oneRestaurant} = this.props

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
              onClick={() => {
                this.toggleModal()
                getRestaurantInfo(randomRestaurant.place_id)
              }}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{randomRestaurant.name}</p>
              <p className="subtitle is-6">
                {randomRestaurant.formatted_address}
              </p>
            </div>
          </div>

          <div className="content">
            {/* Description of restaurant here */}
            <p className="subtitle is-6">Rating: {randomRestaurant.rating}</p>
            <br />
          </div>

          <ChoiceModal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
            oneRestaurant={oneRestaurant}
          />

          <div className="buttons is-centered">
            <button className="button is-warning is-large">Vote</button>
          </div>
        </div>
      </div>
    )
  }
}