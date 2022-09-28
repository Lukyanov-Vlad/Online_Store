const Product=function(){
    this.getProductData=async (idProduct)=>{
       
        const productData=await fetch(`https://fakestoreapi.com/products/${idProduct}`);
        const data=await productData.json();
       
     
        return data;
    }
    this.create=async (idProduct)=>{
        const productInfo=await this.getProductData(idProduct);
        
        const {id,title,price,description,image} = productInfo;
        const element=document.createElement('div');
        element.classList.add('container');
        element.innerHTML=`
        <h1 class='product_title'>${title}</h1>
        <img class='product_img' src='${image}' alt='${title}'>
        <p class='product_info'>${description}</p>
        <div class='product_option'>
            <p class='product_price'>${price} $</p>
            <button class='product_btn' id='${id}'>Add to cart</button>
        </div>
      `;
        return element;
    }
    this.init=()=>{
        const pathId=location.hash.split('/')[1];
        console.log('product');
        return this.create(pathId);
    }
}


const product=new Product();

export default product;