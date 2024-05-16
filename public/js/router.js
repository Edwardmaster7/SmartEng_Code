export class Router {
    
    constructor(tabSwitch) {
        this.tabSwitch = tabSwitch
    }

    routes = {}

    setup(router) {
        this.tabSwitch.getActualTab()
        const actualTab = this.tabSwitch.tab
        
        // console.log(`actual tab: ${actualTab}`)

        router.add('/', '/pages/home.html')
        router.add('/cliente', '/pages/client.html')
        router.add('/orcamento', '/pages/budget.html')
        router.add('/etapas', '/pages/stages.html')
        router.add('/bdi', '/pages/bdi.html')
        router.add('/bases', '/pages/bases.html')
        router.add(404, '/pages/404.html')
    }

    add(routeName, page) {

        this.routes[routeName] = page
        // console.log(`page: ${page}`)
        // console.log(this.routes)
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
        console.log(`pathname: ${pathname}`)
        const route = this.routes[pathname]

        console.log(`Rota antes do fetch: ${route}`)
        fetch(route)
        .then((data) => data.text())
        .then(html => document.querySelector('#app').innerHTML = html)
        .then(() => this.#handleExternalContent())
    
        console.log(`Rota depois do fetch: ${route}`)
        this.tabSwitch.switchTab()
    }

    #handleExternalContent() {
        // Get the current URL path
        const { pathname } = window.location;
        const path = this.routes[pathname];

        console.log(`path: ${path}`);

        switch (pathname) {
            case '/':
                // Fetch the home page content
                console.log(`Fetching home page content...`);
                fetch('http://127.0.0.1:5000/plot')
                    .then(response => response.blob())
                    .then(blob => {
                        const imageUrl = URL.createObjectURL(blob);
                        const imageContainer = document.getElementById('plot-container');
                        const img = document.createElement('img');
                        img.src = imageUrl;
                        imageContainer.appendChild(img);
                    })
                    .catch(error => console.error('Error:', error));
                break;
            // Add more cases for other routes here
            default:
                // Handle unknown routes or do nothing
                break;
        }
    }

}






