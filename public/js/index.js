import { Router } from './router.js'
import { TabSwitch } from './tabSwitch.js'

const tabSwitch = new TabSwitch()
const router = new Router(tabSwitch)

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

