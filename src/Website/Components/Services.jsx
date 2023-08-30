import ImageWIthContent from "./ImageWIthContent";
import service1 from "../../Website/img/vectr/organisations.png";
import ServiceIconBox from "./ServiceIconBox";

const Services = () =>
{   
    return(
        <>
            <ImageWIthContent 
            sectionClass="header_banner_innerPage"
            colom1="col-xl-6 align-self-center orders_two order-xl-2"
            colom2="col-xl-6 orders_one order-xl-1  align-self-center"
            title="OUR SERVICES"
            text = " Generate more Leads with online lead generation Services campaign for your business and increase the conversion rate. Mannsleads help in providing pay per leads Services to help in growth of online business. Lead generation is the first step in bringing customers to the company. Our team helps in generating Leads for the company to get more customers and convert those Leads into customers."
            buttonText = "Enquire Now"
            buttonUrl = "/enquiry"
            image = {service1}
            />   

            <ServiceIconBox />
        </>
    )
}
export default Services;