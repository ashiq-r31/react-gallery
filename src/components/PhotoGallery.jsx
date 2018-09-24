
import React, { Component } from 'react'
import './PhotoGallery.scss'
import seriousImg from '../images/serious-pizza.jpg'
import japanImg from '../images/japan.jpg'
import pieImg from '../images/pie.png'
import bb8Img from '../images/bb8_1.svg'
import waveImg from '../images/wave.gif'
import leftIcon from '../images/left.svg'
import rightIcon from '../images/right.svg'

export default class PhotoGallery extends Component {
  constructor() {
    super()
    this.state = {
      current: 0,
      errors: [],
      images: [
        { id: 1, url: seriousImg, caption: 'Back at my favorite spot in Deep Ellum!' },
        { id: 2, url: japanImg, caption: 'Neon city' },
        { id: 3, url: waveImg, caption: '' },
        { id: 4, url: '../images/non-exist.jpeg', caption: 'Here is an edge case' },
        { id: 5, url: pieImg, caption: 'They are an actual pie restaurant - just saying' },
        { id: 6, url: bb8Img, caption: 'Best Star Wars character since Chewie' },
      ]
    }
  }

  createSlides() {
    return this.state.images.map(image => {
      return (
        <div 
          key={`slide-${image.id}`} 
          className='slide'
          onTouchStart={(e) => this.handleStart(e)}
          onTouchEnd={(e) => this.handleEnd(e)}>
          <div key={`slide-container-${image.id}`} className='slide-container'>
            {this.createImage(image)}
          </div>
        </div>
      )
    })
  }

  createImage(image) {
    if(this.state.errors.includes(image.id)) {
      return <p style={{ color: 'white' }}>Image not available</p>
    }
    return (
      <img 
        id={image.id} 
        key={`img-${image.id}`} 
        style={{ height: 'inherit' }} 
        src={image.url}  
        alt={image.caption} 
        onError={(e) => this.onError(e)} />
    )
  }

  handleStart(e) {
    this.setState({ clientX: e.changedTouches[0].clientX })
  }

  handleEnd(e) {
    const { current, images, clientX } = this.state
    const deltaX = e.changedTouches[0].clientX - clientX
    if(deltaX < -20 && current < images.length - 1) this.slide('next')
    if(deltaX > 20 && current > 0) this.slide('prev')
  }
  

  onError(e) {
    this.setState({ 
      errors: [...this.state.errors, parseInt(e.currentTarget.id)] 
    })
  }

  slide(name) {
    const { current, images } = this.state
    if (name === 'next' && current < images.length) {
      const curr = current + 1
      this.setState({ current: curr })
    }
    if (name === 'prev' && current > 0) {
      const curr = current - 1
      this.setState({ current: curr })
    }
  }

  render({ current, images } = this.state) {
    return (
      <div id='photo-gallery'>
        <div 
          className='gallery' 
          style={{ transform: `translate(${current * -100}vw)` }}>
          {this.createSlides()}
        </div>

        {current > 0 &&
          <img
            className='direction left'
            src={leftIcon} alt='left'
            onClick={() => this.slide('prev')} />}
        {current < images.length - 1 &&
          <img
            className='direction right'
            src={rightIcon}
            alt='right'
            onClick={() => this.slide('next')} />}

        {images[current].caption.length && <div className='caption'>
          <p>{images[current]['caption']}</p>
        </div>}
      </div>
    )
  }
}