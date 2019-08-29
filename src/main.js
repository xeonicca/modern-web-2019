// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

document.addEventListener('visibilitychange', e => {
  if(document.visibilityState === 'visible') {
    let timeNode = Array.prototype.filter.call(document.querySelectorAll('.time-hint'), v => {
      let startDate = v.dataset.startDate, endDate = v.dataset.endDate
      return +startDate < Date.now() && +endDate > Date.now()
    })

    if(timeNode.length) {
      timeNode = timeNode[0]
      let oldRow = document.querySelector('tr.is-active')
      oldRow && oldRow.classList.remove('is-active')
      let activeRow = timeNode.parentNode.parentNode
      activeRow.classList.add('is-active')
      window.scrollTo({
        top: activeRow.getBoundingClientRect().top - 50,
        behavior: "smooth"
      });
    }
  }
})