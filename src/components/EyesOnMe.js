// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  eyesFocus = () => console.log("Good!")
  eyesBlur = () => console.log("Hey! Eyes on me!")

  render () {
    return (
      <button onFocus={this.eyesFocus} onBlur={this.eyesBlur}>
      </button>
    )
  }
}
