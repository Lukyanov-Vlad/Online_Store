const Home=function(){

    this.create=async ()=>{
       
        const element=document.createElement('div');
        element.classList.add('container');
        element.innerHTML=`
                <div class="promo">
                <a class='promo_link' href='#'><img src="img/supermarket.png" alt="home"></a>
                </div>
                <div class='home_info'>
                    <h2 class='home_section_title'>WHAT'S ON SALE</h2>
                    <div class='sale_wrapper'>
                        <a href='#' class='home_sale_link'>
                            <img src='../img/women.jpg' alt='sale'>
                            <p class='home_sale_item_title'>Woman New in<p>
                            <p class='home_sale_item_subtitle'>Shop Now...</p>
                        </a>
                        <a href='#' class='home_sale_link'>
                            <img src='../img/children.jpg' alt='sale'>
                            <p class='home_sale_item_title'>Children New in<p>
                            <p class='home_sale_item_subtitle'>Shop Now...</p>
                        </a>
                        <a href='#' class='home_sale_link'>
                            <img src='../img/man.jpg' alt='sale'>
                            <p class='home_sale_item_title'>Mens New in<p>
                            <p class='home_sale_item_subtitle'>Shop Now...</p>
                        </a>
                    </div>
                    <a class='pay_link'><img src='../img/pay.jpg' alt='pay'</a>
                </div>
      `;
        return element;
    }
    this.init=()=>{
       
   
        return this.create();
    }
}


const home=new Home().init();

export default home;