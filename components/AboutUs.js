const AboutUs=function(){

    this.create=async ()=>{
       
        const element=document.createElement('div');
        element.classList.add('container');
        element.innerHTML=`
                
                <div class='about_info'>
                  
                    <div class='about_wrapper'>
                        <div class='about_wrapper_items_left'>
                            <p class='about_text'>NEW STYLE is a fashion industry leader making the latest trends accessible to all while inspiring unique style and confidence. With a renewed focus on the customer experience, the brand offers high style designs and fashion basics with compelling values and a dynamic store environment. While driving innovation across e-commerce and digital to expand access and convenience, the brand continues to strengthen its positioning as today’s preferred destination for the fashionable consumer. NEW STYLE is located in more than 540 locations globally and online.</p>
                            <p class='about_text'>NEW STYLE is always looking for talented, hard working people to join our team.</p>
                            <p class='about_text'>If you have what it takes, check our Current Openings below or stop by any of our stores and fill out an application today.</p>
                            <p class='about_text'>NEW STYLE Just as a consumer has choices, at NEW STYLE we take our business choices seriously, including the way we obtain the products we sell. We strive to have a positive impact not only within our stores and corporate family, but also upon the environment and on the hundreds of vendor manufacturing facilities throughout the world and their employees.</p>
                            <p class='about_text'> At NEW STYLE, one of our core values is to encourage giving and to lend a helping hand to those who need it most. We are always finding ways to help our local communities and partner with charities of every scale. Over the years, we have carried product that has helped different organizations, such as Give to Love, Love to Give. We have also developed collaborative products with proceeds benefiting charitable organizations. A current exciting project is with Project Level to develop a collaborative line of products. Project Level is an amazing non-profit organization which nurtures the creative needs of at-risk and underserved inner-city youth in the San Francisco Bay area. When we partner with an organization on a specific collection, a portion of the proceeds is donated to the designated charity.</p>
                        </div>
                        <div class='about_wrapper_items_right'>
                                <div class='about_img'>
                                    <img src='../img/aboutus1.jpg' alt='about'>
                                    <p class='about_item_title'>New Style Outside<p>
                                </div>
                                <div class='about_img'>
                                    <img src='../img/aboutus2.jpg' alt='about'>
                                    <p class='about_item_title'>New Style Inside<p>
                                </div>
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
      `;
        return element;
    }
    this.init=()=>{
       
   
        return this.create();
    }
}


const aboutUs=new AboutUs().init();

export default aboutUs;