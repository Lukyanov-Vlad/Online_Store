const Contacts=function(){

    this.create=async ()=>{
       
        const element=document.createElement('div');
        element.classList.add('container');
        element.innerHTML=`
                
            <div class='contacts_info'>
                <p class='contacts_text'>If you have a question we are available to help instantly via live chat. Please click the link below to get started.</p>      
                <div class='contacts_wrapper'>
                    <div class='contacts_item'>
                        <img src='../img/contacts1.png' alt='contacts'>
                        <h3 class='contacts_title'>Chat with us</h3>
                        <p class='contacts_description'>We're here and ready to chat</p>
                        <a href='mailto:ask@htmlbook.ru' class='contacts_link'>Start Chat</a>
                    </div>
                    <div class='contacts_item'>
                        <img src='../img/contacts2.png' alt='contacts'>
                        <h3 class='contacts_title'>Call us</h3>
                        <p class='contacts_description'>We're here to help, but you might have to wait a few minutes for us to connect you.</p>
                        <a href='tel:+1234567890' class='contacts_link'>+123 456 7890</a>
                    </div>
                </div>    
                <p class='contacts_text align'>Chat is available 24/7 from anywhere!</p> 
                <p class='contacts_text align'>We are now taking calls between Monday to Sunday 24 hours a day. Please call us on 1-888 385 6398.</p> 
                <p class='contacts_text align'> Our Address: <a href='https://google.com' class='contacts_address_link'>59 Street, Newyork city, Rose town 05 Rive House</a></p>
            </div>
      `;
        return element;
    }
    this.init=()=>{
       
   
        return this.create();
    }
}


const contacts=new Contacts().init();

export default contacts;