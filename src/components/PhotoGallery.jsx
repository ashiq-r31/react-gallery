
import React, { Component } from 'react'
import styles from './PhotoGallery.scss'
import seriousImg from '../images/serious-pizza.jpg'
import pieImg from '../images/pie.png'
import bb8Img from '../images/bb8_1.svg'

export default class PhotoGallery extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        { url: seriousImg, caption: 'Back at my favorite spot in Deep Ellum!' },
        { url: pieImg, caption: 'They are an actual pie restaurant - just saying.' },
        { url: bb8Img, caption: 'Best Star Wars character since Chewie.' },
      ]
    }
  }

  createImages() {
    return this.state.images.map(image => <img src={image.url} alt={image.caption} />)
  }

  render() {
    return (
      <div>
        <h2>Photo Gallery</h2>
        {this.createImages()}
      </div>
    )
  }
}