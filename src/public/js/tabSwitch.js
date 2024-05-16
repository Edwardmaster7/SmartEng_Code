export class TabSwitch{

    getActualTab() {
        const { pathname } = window.location
        
        this.oldtab = this.tab
        this.tab = pathname.split('/')[1]
        
        if(this.tab === '') {
            this.tab = 'home'
        } else if(this.tab === 'cliente') {
            this.tab = 'client'
        } else if(this.tab === 'orcamento') {
            this.tab = 'budget'
        } else if(this.tab === 'etapas') {
            this.tab = 'stages'
        } else if(this.tab === 'bdi') {
            this.tab = 'bdi'
        } else if(this.tab === 'bases') {
            this.tab = 'bases'
        }
        console.log(`actual tab=${this.tab}, old tab=${this.oldtab}`)
    }

    switchTab() {
        this.getActualTab()
        if(this.oldtab === undefined) {
            return
        } else if(this.oldtab !== this.tab) {
                document.querySelector(`#${this.oldtab}-tab`).classList.remove('tab-focus')
                document.querySelector(`#${this.oldtab}-tab`).classList.remove('current-page')
                document.querySelector(`#${this.oldtab}-button`).classList.remove('hidden')

                document.querySelector(`#${this.tab}-tab`).classList.add('tab-focus')
                document.querySelector(`#${this.tab}-tab`).classList.add('current-page')
                document.querySelector(`#${this.tab}-button`).classList.add('hidden')

        }
    }

    init() {
        this.switchTab()
    }
    
}
