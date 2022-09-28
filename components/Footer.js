function Footer(){
    this.create=()=>{
        const element=document.createElement('footer');
        element.classList.add('footer');
        element.innerHTML=`<div class='container'>
                                <div class=footer_wrapper>
                                    <div class='footer_logo'>
                                        <a href="/"><img class='logo_img' src='../img/logo2.png'></a>
                                    </div>
                                    <div class='footer_info'>
                                        <a href='https://google.com' class='footer_link'><img  class ='ico_img' src='../img/target.png'><span class='footer_text'>59 Street, Newyork city, Rose town 05 Rive House</span></a>
                                        <a href='tel:+1234567890' class='footer_link'><img  class ='ico_img ico_phone' src='../img/phone.png'><span class='footer_text'>+123 456 7890</span></a>
                                        <a href='mailto:ask@htmlbook.ru' class='footer_link'><img  class ='ico_img' src='../img/message.png'><span class='footer_text'>info@example.com</span></a>
                                    </div>
                                </div>
                                <p class='footer_copyright'>© Copyright 2022 FreebiesXpress.com</p>
                            </div>`;
        return element;
    }
    this.init=()=>{
        return this.create();
    }
}


const footer=new Footer().init();
export default footer;