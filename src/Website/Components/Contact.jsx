import ImageWIthContent from "./ImageWIthContent";
import contact from "../../Website/img/vectr/contact.png";
import ContactIconsBox from "./ContactIconsBox";
const Contact = () =>
{   
    return(
        <>
           <ImageWIthContent 
            sectionClass="header_banner_innerPage"
            colom1="col-xl-6 align-self-center orders_two order-xl-2"
            colom2="col-xl-6 orders_one order-xl-1  align-self-center"
            title="GET IN TOUCH"
            text = "Visit our Website or Simply Send us an Email anytime you want. If you have any Questions, Please feel free to Contact us."
            buttonText = "Enquire Now"
            buttonUrl = "/enquiry"
            image = {contact}
            />   

            <ContactIconsBox />

            <section className="map_contact">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28004.489610566718!2d77.36877395494388!3d28.672854526887406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0708e20e1e1%3A0x5ee3618f25c6e35f!2sMann&#39;s%20Network!5e0!3m2!1sen!2sin!4v1670046106180!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

        </>
        
    )
}
export default Contact;