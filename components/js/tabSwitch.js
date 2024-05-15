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
                document.querySelector(`#${this.tab}-tab`).classList.add('tab-focus')
                // this.#switchBackground()
        }
    }
    
    // #switchBackground() {
    //     if(this.oldtab === undefined) {
    //         return
    //     } else if(this.oldtab !== this.tab){
    //         switch(this.tab){
    //             case 'home':
    //                 document.querySelector('body').classList.remove(`${this.oldbackground}`);
    //                 document.querySelector('body').classList.add('background1');
    //                 this.oldbackground = 'background1'
    //                 break;
    //             case 'universe':
    //                 document.querySelector('body').classList.remove(`${this.oldbackground}`);
    //                 document.querySelector('body').classList.add('background2');
    //                 this.oldbackground = 'background2'
    //                 break;
    //             case 'exploration':
    //                 document.querySelector('body').classList.remove(`${this.oldbackground}`);
    //                 document.querySelector('body').classList.add('background3');
    //                 this.oldbackground = 'background3'
    //                 break;
    //             default:
    //                 return
    //         }
    //     }
    // }
}
