const Cart=function(){
    this.cart=JSON.parse(localStorage.getItem('cart')) || [];
    this.create=()=>{
        let productInCartInfo='';
        const element=document.createElement('div');
        element.classList.add('container');
        let fullPrice=0;
        if(this.cart.length===0){
            element.innerHTML=`<h3 class='empty_cart_text'>Корзина пуста<h3>`
        }else{
            this.cart.forEach(({id,title,price,count,image},index)=>{
                // productInCartInfo+=`<p class='product_item'>${index+1}) ${title}. Количество: ${count}. Цена ${price*count} <button class='del_btn' id='${id}'>(удалить)</button></p>`
                
                
                
                productInCartInfo+=`
                                    <div class='cart_item'>
                                        <div class='cart_index'>${index+1}.</div>
                                        <div class='cart_product'>
                                            <div class='cart_item_wrapper'>
                                            
                                                <div class='cart_item_image'><img src='${image}' alt='${title}'></div>
                                                <h3 class='cart_item_title'>${title}</h3>
                                                <div class='cart_item_pay_info'> 
                                                    <p class='cart_item_count'>Count: <span class='bold'>${count} pcs.<span></p> 
                                                    <p class='cart_item_price'>Price: <span class='bold'>${price*count} $<span></p> 
                                                </div>
                                                

                                            </div>
                                            <div class='cart_item_btn'><button class='del_btn' id='${id}'></button></div>
                                        </div>
                                        
                                        
                                    </div>
                `;
                
                fullPrice+=price*count;
               
                
            });
            element.innerHTML=`<div class='cart_wrapper'>
                                    ${productInCartInfo}
                                    <div class='cart_footer'>
                                        <button class='cart_pay_btn'>Pay</button>
                                        <p class='cart_full_price'>Total : ${parseFloat(fullPrice).toFixed(2)} $</p>
                                    </div>
                                    
                                </div>
            `;
        }
   
        return element;
    }
    this.init=()=>{
         this.cart=JSON.parse(localStorage.getItem('cart')) || [];
        return this.create();
    }
}


const cart=new Cart();

export default cart;