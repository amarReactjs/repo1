import Cicon1 from "../../Website/img/icons/emergency-call.png";
import Cicon2 from "../../Website/img/icons/open-mail.png";
import Cicon3 from "../../Website/img/icons/location.png";

const ContactIconsBox = () =>
{
    const contacticoncontent = [
        {
            icon:Cicon1,
            label:'Phone',
            text1:'+91-8810000008',
            text2:'+91-120-4295188',
            text3:'',
            color:"linear-gradient(45deg,var(--color6),#f1b030)",
            outline:"#f1b030"
        },
        {
            icon:Cicon2,
            label:'Email',
            text1:'info@mannsleads.in',
            text2:'',
            text3:'',
            color:"linear-gradient(45deg,#8C3FFE,#CF30FC)",
            outline:"#CF30FC"
        },
        {
            icon:Cicon3,
            label:'Address',
            text1:'936/Second Floor, New Karhera Colony,',
            text2:'Nearby Hindon Air Force,',
            text3:'Mohan Nagar, Ghaziabad - 201007',
            color:"linear-gradient(45deg,#FF4F2C,#FF48A6)",
            outline:"#FF48A6"
        }
    ]
    return(
        <>
            <section class="info_area">
	 <div class="info_area_container">
	 	<div class="container">
	 	 <div class="row">
                            {
                                contacticoncontent.map((ContactIcons) =>{
                                    return(
                                        <div className="col-xl-4 margin_bottom col-sm-6">
                                                <div className="info_box"style={{
                                                "--icons_colors":ContactIcons.color,
                                                "--outline-colors":ContactIcons.outline
                                            }}>
                                                    <span className="icon">
                                                        <img src={ContactIcons.icon} alt="" className="img-fluid" />
                                                    </span>
                                                    <span className="head">{ContactIcons.label}</span>
                                                    <span className="vals">
                                                            <a>{(ContactIcons.text1 != '')?ContactIcons.text1:''}</a>
                                                            <a>{(ContactIcons.text2 != '')?ContactIcons.text2:'' }</a>
                                                            <a>{(ContactIcons.text3 != '')?ContactIcons.text3:'' }</a>
                                                    </span>
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
export default ContactIconsBox;