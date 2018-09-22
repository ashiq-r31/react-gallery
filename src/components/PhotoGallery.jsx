
import React, { Component } from 'react'
import './PhotoGallery.scss'
import seriousImg from '../images/serious-pizza.jpg'
import japanImg from '../images/japan.jpg'
import pieImg from '../images/pie.png'
import bb8Img from '../images/bb8_1.svg'
import leftIcon from '../images/left.svg'
import rightIcon from '../images/right.svg'

export default class PhotoGallery extends Component {
  constructor() {
    super()
    this.state = {
      current: 0,
      images: [
        { url: seriousImg, caption: 'Back at my favorite spot in Deep Ellum!' },
        { url: japanImg, caption: 'Neon city' },
        { url: pieImg, caption: 'They are an actual pie restaurant - just saying.' },
        { url: bb8Img, caption: 'Best Star Wars character since Chewie.' },
      ]
    }
  }

  createImages() {
    return this.state.images.map((image, index) => {
      return (
        <div key={`slide-${index}`} className='slide'>
          <div key={`slide-container-${index}`} className='slide-container'>
            <img 
              key={`img-${index}`} 
              style={{ height: 'inherit' }} 
              src={image.url} 
              alt={image.caption} />
          </div>
        </div>
      )
    })
  }

  slide(name) {
    if (name === 'next' && this.state.current < this.state.images.length) {
      const current = this.state.current + 1
      this.setState({ current })
    }
    if (name === 'prev' && this.state.current > 0) {
      const current = this.state.current - 1 
      this.setState({ current })
    }
  }

  render() {
    return (
      <div>
        <div className='gallery' style={{ transform: `translate(${this.state.current * -100}vw)` }}>
          {this.createImages()}
        </div>
        
        {this.state.current > 0 && 
          <img 
            className='direction left' 
            src={leftIcon} alt='left' 
            onClick={() => this.slide('prev')} />}
        {this.state.current < this.state.images.length - 1 && 
          <img 
            className='direction right' 
            src={rightIcon} 
            alt='right' 
            onClick={() => this.slide('next')} />}

        <div className='caption'>
          <p>{this.state.images[this.state.current]['caption']}</p>
        </div>
      </div>
    )
  }
}