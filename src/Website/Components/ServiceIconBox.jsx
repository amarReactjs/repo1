import icon1 from "../../Website/img/icons/shield.png";
import icon2 from "../../Website/img/icons/shield.png";
import icon3 from "../../Website/img/icons/pay.png";
import icon4 from "../../Website/img/icons/data-management.png";

const ServiceIconBox = () =>
{
    const servicesiconcontent = [
        {
            icon:icon1,
            text:'We Deliver Quality And Verified Leads',
            color:"linear-gradient(45deg,#057689,#26b8d1)",
            outline:"#057689"
        },
        {
            icon:icon2,
            text:'Zero Budget Risks',
            color:"linear-gradient(45deg,#FF4F2C,#FF48A6)",
            outline:"#FF48A6"
        },
        {
            icon:icon3,
            text:'Pay Only For Qualified Leads',
            color:"linear-gradient(45deg,#8C3FFE,#CF30FC)",
            outline:"#CF30FC"
        },
        {
            icon:icon4,
            text:'Genuine Databases',
            color:"linear-gradient(45deg,#6FBF28,#CBB722)",
            outline:"#6FBF28"
        }
    ]
    return(
        <>
            <section className="clients_section2" >
                <div className="client_container">
                    <div className="container">
                        <div className="row">
                            {
                                servicesiconcontent.map((serviceIcons) =>{
                                    return(
                                        <div className="col-xl-3 margin_bottom col-sm-6 col-md-6">
                                            <div className="icons_box" style={{
                                                "--icons_colors":serviceIcons.color,
                                                "--outline-colors":serviceIcons.outline
                                            }}>
                                                <span className="icon"><img src={serviceIcons.icon} alt="" className="img-fluid" /></span>
                                                <span className="sub-heading">{serviceIcons.text}</span>
                                            </div>
                                            </div>
                                    )
                                })
                            }
                          
                        
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}
export default ServiceIconBox;