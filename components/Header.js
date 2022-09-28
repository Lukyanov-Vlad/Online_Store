import nav from './Nav.js'


function Header(){
    this.create=()=>{
        const element=document.createElement('header');
        element.classList.add('header');
        element.innerHTML=`<div class='container'>
                                <div class='header_wrapper'>  
                                    <div class='header_logo'>
                                        <a href='/'>
                                            <img class='logo_img' src='../img/logo3.png'>
                                        </a>
                                    </div>
                                    ${nav.outerHTML}
                                </div>
                            </div>`
        return element;
    }
    this.init=()=>{
        return this.create();
    }
}


const header=new Header().init();

export default header;