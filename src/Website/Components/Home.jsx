import HomeBanner from "./Banner/HomeBanner";
import ImageWIthContent from "./ImageWIthContent";
import HomeAbout from "../../Website/img/business_growth.png";
import ScrollingContent from "./ScrollingContent";



import vbi1 from "../../Website/img/background_growth.png";
import vbi2g from "../../Website/img/image235.png";

const vbi11 = `url(${vbi1})`;
const vbi22 = `url(${vbi2g})`;
const Home = () =>
{   
    return(
        <>
            <HomeBanner />
            <ImageWIthContent
            sectionClass="vision_business"
            colom1="col-xl-6 align-self-center orders_two order-xl-1"
            colom2="col-xl-6 orders_one order-xl-2  align-self-center"
            title="About Us"
            text = "From start-ups to grownups, Mannsleads has served to all and has helped businesses to grow by quality leads. We can be your perfect success partners. Mannsleads is a leading genuine outsourcing company in providing genuine databases to all B2c Services. Our 12+ years of experience has enabled us to join a significant position among leading digital marketing companies across the India. "
            buttonText = "Read More"
            buttonUrl = "/about"
            image = {HomeAbout}
            style1={{
                "--vision_bussiness_image1":vbi11,
                "--vision_bussiness_image2":vbi22
            }}
            />

            <ScrollingContent />
        </>
    )
}
export default Home;