import { Router } from './router.js'
import { TabSwitch } from './tabSwitch.js'

const tabSwitch = new TabSwitch()
const router = new Router(tabSwitch)

tabSwitch.init()

router.setup(router)

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

const menuBtn = document.getElementById('menu')
const mobileNav = document.getElementById('mobile-nav')
const body = document.body

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    menuBtn.classList.toggle('scale-110')
})

// document.addEventListener('DOMContentLoaded', function() {
//     const mobileNavButtons = document.querySelectorAll('#mobile-nav button');
//     const navA = document.querySelectorAll('nav a');
//     mobileNavButtons.forEach(button => {
//       button.addEventListener('click', route);
//     });
//   });
