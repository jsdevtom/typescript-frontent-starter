import '../styles/main.css'
import '../styles/sass.scss'

import { go } from './mod'

setTimeout(function() {
  document.querySelector('#greeting').textContent += go  
}, 2000)
