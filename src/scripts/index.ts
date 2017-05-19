import '../styles/main.css'
import '../styles/sass.scss'

export const hi = 'hi'

setTimeout(function() {
  document.querySelector('#greeting').innerHTML = 'works'
  
}, 2000);
