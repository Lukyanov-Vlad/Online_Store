


function Nav(){
    this.localData=JSON.parse(localStorage.getItem('dataSPA'));
   
    this.create=()=>{
        const element=document.createElement('nav');

        element.classList.add('nav');
        //------------------------------------------------------------------------------------------
        let line='';
        this.localData.forEach(({slug,title})=>{
            line+=`<li class='nav_item'><a href='#${slug}'>${title}</a></li>`
        })
        //------------------------------------------------------------------------------------------     

        element.innerHTML=` 
                          <button class='btn_menu'>
                            <div class='line'></div>
                          </button>
                          <ul class='nav_items'>
                                    ${line}

                          </ul>
        `;
        
        
        return element;
    }
    this.init=()=>{
        return this.create();
    }
}

const nav=new Nav().init();


export default nav;