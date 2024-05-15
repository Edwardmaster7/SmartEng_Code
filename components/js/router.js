export class Router {
    
    constructor(tabSwitch) {
        this.tabSwitch = tabSwitch
    }

    routes = {}

    setup(router) {
        this.tabSwitch.getActualTab()
        const actualTab = this.tabSwitch.tab
        
        console.log(`actual tab: ${actualTab}`)

        router.add('/', '/pages/home.html')
        router.add('/cliente', '/pages/client.html')
        router.add('/orcamento', '/pages/budget.html')
        router.add('/etapas', '/pages/stages.html')
        router.add('/bdi', '/pages/bdi.html')
        router.add('/bases', '/pages/bases.html')
        router.add(404, '/pages/404.html')

        this.#handle()
    }

    add(routeName, page) {

        this.routes[routeName] = page
        console.log(`page: ${page}`)
        console.log(this.routes)
    }

    route(event) {
        event = event || window.event // verify if there is an event, otherwise catch window.event 
        console.log(`event: ${event}`)
        event.preventDefault()
            
        window.history.pushState({}, '', event.target.href)

        this.handle()
    }

    handle() {
        // const pathname = window.location.pathname
        const { pathname } = window.location
        const route = this.routes[pathname]

        console.log(`Rota antes do fetch: ${route}`)
        fetch(route)
        .then((data) => data.text())
        .then(html => document.querySelector('#app').innerHTML = html)
    
        console.log(`Rota depois do fetch: ${route}`)
        this.tabSwitch.switchTab()
    }

    #handle() {
    // Get the current URL path
    const { pathname } = window.location
    const path = this.routes[pathname]

    // Check if the path is '/cliente'
    if (path === '/cliente') {
    // Fetch the client page content
        fetch('/pages/index.html')
        .then(response => response.text())
        .then(html => {
        // Insert the fetched HTML into the #app div
        document.getElementById('app').innerHTML = html;
        })
        .catch(error => console.error('Error fetching client page:', error));
     }// else {
    // // Handle other routes or load the default content
    //     fetch('/index.html')
    //     .then(response => response.text())
    //     .then(html => {
    //     // Insert the fetched HTML into the #app div
    //     document.getElementById('app').innerHTML = html;
    //     })
    //     .catch(error => console.error('Error fetching index page:', error));
    // }

    }
}


