export const getSlugOfHash=(hash)=>{
    
    return hash.slice(1) || 'home';
}

export const getPageData=(slugOfHash)=>{
    let localData=JSON.parse(localStorage.getItem('dataSPA'));
    slugOfHash=slugOfHash.split('/')[0];
    const Data=localData.find(({slug})=>{
        return slugOfHash.includes(slug);
    });
    return Data;
}


export const hashChangeEvent=(actionFunction)=>{
   
    window.addEventListener('hashchange',()=>{
        actionFunction(location.hash);
       
    })
}


export const changeActiveBurger=(burgerBtn,burgerMenu)=>{

      
            burgerBtn.classList.toggle('active_burger_menu');
            burgerMenu.classList.toggle('active_nav_items');
        
           
}


export const preLoader=()=>{
    return `
    <div class='mask'>
    <div class='loader'></div>
    </div>`;
}


export const updateLocalStorageCart=(cart)=>{
    localStorage.setItem('cart',JSON.stringify(cart));
}