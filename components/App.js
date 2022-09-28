//import header from './Header.js';
// import main from './Main.js';
// import footer from './Footer.js';
import {getSlugOfHash,getPageData,hashChangeEvent, changeActiveBurger} from '../utils/utils.js'

function App(){
    this.app='';

    this.create=()=>{
        this.app=document.createElement('div');
        this.app.classList.add('app');

        document.body.appendChild(this.app);

    }

    this.getData=()=>{
        fetch('../data/data.js')
            .then((response)=>response.text())
            .then(data=>{
                setTimeout(()=>{
                    localStorage.setItem('dataSPA',data);
                    this.setTitle(location.hash);
                    hashChangeEvent(this.setTitle);
                    this.render();
                    
                },0);
            });
    }
    this.setTitle=(hash)=>{
        const slugOfHash=getSlugOfHash(hash);
        if(!hash){
            location.replace(`${location.pathname}#${slugOfHash}`);
        }
        const MainData=getPageData(slugOfHash);
       
        const {pageTitle}=MainData;
        document.title=pageTitle;

    }
//почитать try catch finnally
    this.render=async ()=>{
        const dataHeader=await import('./Header.js');
        
        const dataMain=await import('./Main.js');
        const dataFooter=await import('./Footer.js');

        const header=dataHeader.default;
        const main=dataMain.default;
        const footer=dataFooter.default;

        this.app.appendChild(header);
        this.app.appendChild(main);
        this.app.appendChild(footer);

        this.addEventToBurger();
       
       
    }
   
    this.addEventToBurger=()=>{
              
                    const burgerBtn=document.querySelector('.btn_menu');
                    const burgerMenu=document.querySelector('.nav_items');
        
                    burgerBtn.addEventListener('click',()=>{changeActiveBurger(burgerBtn,burgerMenu);});

                    document.addEventListener('click',(event)=>{
                       
                        if(event.target!==burgerBtn && event.target!==burgerMenu && !burgerBtn.contains(event.target) && !burgerMenu.contains(event.target)){
                            if(burgerBtn.classList.contains('active_burger_menu')){
                                changeActiveBurger(burgerBtn,burgerMenu);
                            }
                            
                        }
                    })
                    this.addEventToNavLink(burgerBtn,burgerMenu);
                    
                
    }
   
    this.addEventToNavLink=(burgerBtn,burgerMenu)=>{
        const linkInLi=document.querySelectorAll('li > a');
        console.log(linkInLi)
        linkInLi.forEach((elem)=>{
            elem.addEventListener('click',()=>{
                console.log('herh')
                changeActiveBurger(burgerBtn,burgerMenu);
            })
        })
    }
    this.init=()=>{
        this.create();
        this.getData();
        
    }
}

const app=new App().init();

