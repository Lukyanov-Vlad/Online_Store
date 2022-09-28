import {CATALOG} from "../constants/constants.js";


const Catalog=function(){
    
    this.catalogData=JSON.parse(localStorage.getItem('catalogData')) || [];
    this.getCatalogData=async ()=>{
        const response=await fetch('https://fakestoreapi.com/products');
        console.log(response);
        const data=await response.json();
        console.log(data);
        localStorage.setItem('catalogData',JSON.stringify(data));
        return data;
    }
    this.create=async ()=>{
        console.log('hello from catalog');
        const element=document.createElement('div');
        element.classList.add('catalog_wrapper');
        if(this.catalogData.length===0){
            
           
            this.catalogData=await this.getCatalogData();
           
            
        }
      
        
        let li='';
        this.catalogData.forEach(({id,title,price,image})=>{
            li+=`
                <li class='catalog_item'>
                    <div class='catalog_item_img'>
                        <img src='${image}' alt='${title}'>
                    </div>
                    <div class='catalog_item_info'>
                        <a class='catalog_item_link' href='#${CATALOG}/${id}'><h3 class='catalog_item_title'>${title}</h3></a>
                        <div class='catalog_item_options'>
                            <p class='catalog_item_options_price'>$${price}</p>
                            <button class='catalog_item_options_btn' id='${id}'>Add to cart</button>
                        </div>
                    </div>  
                </li>    
            `;
        });
        element.innerHTML=`
            <ul class='catalog_items'>
                ${li}
            </ul>
        `;
        
        return element;
    }
    this.init=()=>{
       return this.create();
    }
}

 const catalog=new Catalog().init();
 export default catalog;
