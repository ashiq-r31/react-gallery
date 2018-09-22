import styles from './index.scss'
import seriousIcon from './images/serious-pizza.jpg'
import graffitiIcon from './images/graffiti.png'
import bb8Icon from './images/bb8_1.svg'

const serious = document.createElement('img')
serious.src = seriousIcon

const graffiti = document.createElement('img')
graffiti.src = graffitiIcon

const bb8 = document.createElement('img')
bb8.src = bb8Icon

const app = document.getElementById('app')

app.appendChild(serious)
app.appendChild(graffiti)
app.appendChild(bb8)