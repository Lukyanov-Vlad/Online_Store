import {getSlugOfHash,getPageData,hashChangeEvent,preLoader,updateLocalStorageCart} from '../utils/utils.js'
import {CATALOG, CART, HOME,ABOUT_US,CONTACTS} from '../constants/constants.js'

function Main(){
    this.element='';
    
    this.create=()=>{
        this.element=document.createElement('main');
        this.element.classList.add('main');

        // element.innerHTML=`<div class='container'>
        //                         <div class='main_wrapper'>
        //                             <h2 class='main_title'>Furniture</h2>
        //                         </div>
        //                     </div>
        // `;

        //return element;
        this.render(location.hash);
        hashChangeEvent(this.render);
    }
   
    this.render=(hash)=>{
        const slugOfHash=getSlugOfHash(hash);
        if(!hash){
            location.replace(`${location.pathname}#${slugOfHash}`);
        }
        const MainData=getPageData(slugOfHash);
        
        const {title,content}=MainData;
        this.getHtmlTemplate(title,content);
        switch (true){
            case slugOfHash===HOME:
                import('./Home.js')
                .then(respone=>respone.default)
                .then(data=>{
                    this.getHtmlTemplate(title,'',data.outerHTML)
                })
            break;
            case slugOfHash===CONTACTS:
                import('./Contacts.js')
                .then(respone=>respone.default)
                .then(data=>{
                    this.getHtmlTemplate(title,'',data.outerHTML)
                })
            break;
            case slugOfHash===CART:
                import('./Cart.js').then(response=>{
                    const data=response.default;
                    this.UpdateCart(data);
                    this.addEventToPayBtn(data);
                    this.addEvevntToDelBtn(data);
                    
                  
                });
            break;
            case slugOfHash===ABOUT_US:
                import('./AboutUs.js')
                .then(respone=>respone.default)
                .then(data=>{
                    this.getHtmlTemplate(title,'',data.outerHTML)
                })
            break;
            case slugOfHash.includes(CATALOG):
                if(slugOfHash===CATALOG){
                    // const catalogData=await import('./Catalog.js');
                    // console.log(catalogData);
                    // const data=await catalogData.default;
                    // this.getHtmlTemplate(title,content,data.outerHTML);
                    this.element.innerHTML=preLoader(); 
                    import('./Catalog.js').then(respone=>{
                        console.log(respone);
                        const responeDefault=respone.default;
                        console.log(responeDefault);
                        responeDefault.then(data=>{
                            this.getHtmlTemplate(title,content,data.outerHTML);
                            const addToCartBtns=this.element.querySelectorAll('.catalog_item_options_btn');
                            addToCartBtns.forEach((elem)=>{
                                elem.addEventListener('click',(e)=>{
                                    this.AddToCart(e.target.id);
                                })
                            })
                        })
                    });
                }
                if(slugOfHash.includes('/')){
                    this.element.innerHTML=preLoader(); 
                   import('./Product.js').then(response=>response.default).then(product=>{
                   
                        const productInfo=product.init();
                        productInfo.then(productData=>{
                                this.element.innerHTML=productData.outerHTML;
                                const addBtn=this.element.querySelector('.product_btn');
                                console.log(addBtn);
                                addBtn.addEventListener('click',(event)=>{
                                    this.AddToCart(event.target.id);
                                })
                        })
                   });
                }
            break;
        }
       
    }

    this.importData=(path)=>{
        
    }

    this.getHtmlTemplate=(title,content,htmlElement)=>{
        this.element.innerHTML=`<div class='container'>
                                    <div class='main_wrapper'>
                                        <h2 class='main_title'>${title}</h2>
                                            ${htmlElement ? htmlElement : ''}
                                        <p class='main_content'>${content}</p>
                                    </div>
                                </div>
                            `;
    }


    this.cart=JSON.parse(localStorage.getItem('cart')) || [];
    this.AddToCart=(idProduct)=>{
        const catalogData=JSON.parse(localStorage.getItem('catalogData'));
        const product=catalogData.find(({id})=>id===+idProduct);
        const arrayIndex=this.cart.findIndex(({id})=>id===+idProduct);
        console.log(arrayIndex);
        if(this.cart.findIndex(({id})=>id===+idProduct)!==-1){
           
            this.cart[arrayIndex].count+=1;
            
        }else{
            product.count=1; 
            this.cart.push(product);
        }
        console.log("add to local")
        updateLocalStorageCart(this.cart);
        console.log(this.cart);
    }


    this.addEventToPayBtn=(data)=>{
        const payBtn=this.element.querySelector('.cart_pay_btn');
        if(payBtn){
            payBtn.addEventListener('click',()=>{
                this.cart=[];
                localStorage.removeItem('cart');
                this.UpdateCart(data);
                this.addEvevntToPayBtn(data);
            })
        }
       
    }
    this.addEvevntToDelBtn=(data)=>{
        const delBtns=this.element.querySelectorAll('.del_btn');
        console.log(delBtns);
        delBtns.forEach((elem)=>{
            elem.addEventListener('click',(event)=>{
                console.log('кнопка нажата')
                this.DelFromCart(event.target.id);
                this.UpdateCart(data);
                this.addEvevntToDelBtn(data);
            })
        });
    }

    this.DelFromCart=(idProduct)=>{
        this.cart=this.cart.filter(({id})=>id!==+idProduct)
        updateLocalStorageCart(this.cart);
    }

    this.UpdateCart=(Obj)=>{
        const objectCart=Obj.init();
        this.element.innerHTML=objectCart.outerHTML;
    }

    this.init=()=>{
       this.create();
       return this.element;
    }
}

const main=new Main().init();

export default main;