import ImageWIthContent from "./ImageWIthContent";
import About1 from "../../Website/img/vectr/about_us.png";
import vision1 from "../../Website/img/vectr/visions.png";
import mission1 from "../../Website/img/vectr/mission.png";

const About = () =>
{   
    return(
        <>
             <ImageWIthContent 
            sectionClass="header_banner_innerPage"
            colom1="col-xl-6 align-self-center orders_two order-xl-2"
            colom2="col-xl-6 orders_one order-xl-1  align-self-center"
            title="ABOUT US"
            text = "From start-ups to grownups, Mannsleads has served to all and has helped businesses to grow by quality leads. We can be your perfect success partners. Mannsleads is a leading genuine outsourcing company in providing genuine databases to all B2c Services. Our 12+ years of experience has enabled us to join a significant position among leading digital marketing companies across the India. Collaborate with us to combine your branding with our top- class marketing solutions and innovative ideas to show the performance to your clients. Get free from fake Leads or customers with our comprehensive end- to- end solutions."
            buttonText = "Enquire Now"
            buttonUrl = "/enquiry"
            image = {About1}
            />

            <ImageWIthContent 
            sectionClass="header_banner_innerPage"
            colom1="col-xl-6 align-self-center orders_two order-xl-1"
            colom2="col-xl-6 orders_one order-xl-2 align-self-center"
            title="Our Vision"
            text = "Our vision to see Happy customers in the online Leads generation process and help our clients to grow their business in the market. We would like to visualise our group in the long run and inspiring to use ethical techniques to stay trusted in the market and among the users. "
            buttonText = "Consult With Us"
            buttonUrl = "/enquiry"
            image = {vision1}
            />


            <ImageWIthContent 
            sectionClass="header_banner_innerPage"
            colom1="col-xl-6 align-self-center orders_two order-xl-2"
            colom2="col-xl-6 orders_one order-xl-1  align-self-center"
            title="Our Mission "
            text = " We are on a mission to help you all small and middle sized companies to grow and rise up to the larger sized companies. Our goal is to provide quality customers to our clients through our genuine databases."
            buttonText = "Consult With Us"
            buttonUrl = "/enquiry"
            image = {mission1}
            />      
        </>
    )
}
export default About;