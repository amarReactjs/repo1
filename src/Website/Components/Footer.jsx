import FooterIcon1 from '../../Website/img/icon1.png';
import FooterIcon2 from '../../Website/img/icon2.png';
import FooterIcon3 from '../../Website/img/icon3.png';
import FooterLogo from '../../Website/img/foot-logo.png';
import fb from '../../Website/img/fb.png';
import insta from '../../Website/img/insta.png';
import ytb from '../../Website/img/ytb.png';


const Footer = () =>
{
    return(
        <>
            
<div className="dlab-newsletter">
    <div className="container">
        <div className="ft-contact">
			<div className="ft-contact-bx" data-aos="fade-up">
				<img src={FooterIcon1} alt="" />
				<h4 className="title">Address</h4>
				<p>936/Second Floor, New Karhera Colony, <br />
                    Nearby Hindon Air Force, <br /> Mohan Nagar, 
                    Ghaziabad - 201007</p>
			</div>
			<div className="ft-contact-bx" data-aos="fade-up">
				<img src={FooterIcon2} alt="" />
				<h4 className="title">Phone</h4>
				<p>
					+91-8810000008 <br />
					+91-120-4295188
				</p>
			</div>
			<div className="ft-contact-bx" data-aos="fade-up">
				<img src={FooterIcon3} alt="" /> 
				<h4 className="title">Email Contact</h4>
				<p>info@mannsleads.in</p>
			</div>
		</div>
    </div>
</div>


<footer>
	<div className="container">
		 <div className="row">
		 	 <div className="col-xl-3">
		 	 	<div className="foot_logo">
		 	 		<img src={FooterLogo} alt="" className="img-fluid" />
		 	 	</div>
		 	 </div>

		 	 <div className="col-xl-2 col-sm-6 col-md-6">
		 	 	 <div className="ftr_area">
		 	 	 	 <h6>Important Links</h6>
		 	 	 	 <ul className="">
		 	 	 	 	<li><a href="index.php">Home</a></li>
		 	 	 	 	<li><a href="about.php">About Us</a></li>
		 	 	 	 	<li><a href="service.php">Services</a></li>
		 	 	 	 	<li><a href="blog.php">Blog</a></li>
		 	 	 	 	<li><a href="contact.php">Contact Us</a></li>
		 	 	 	 	<li><a href="enquiry.php">Enquire Now</a></li>
		 	 	 	 </ul>
		 	 	 </div>
		 	 </div>


		 	 <div className="col-xl-4 col-sm-6 col-md-6">
		 	 	 <div className="ftr_area footer_maps">
		 	 	 	 <h6>Get In Touch</h6>
		 	 	 	 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56008.998747896265!2d77.386284!3d28.672818000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ee3618f25c6e35f!2sMann&#39;s%20Network!5e0!3m2!1sen!2sin!4v1670498085305!5m2!1sen!2sin" width="100%" height="180" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		 	 	 </div>
		 	 </div>
           

             <div className="col-xl-2">
             	<div className="social_media_link">
             		<span>Follw Us On</span>
             		 <a href="https://www.facebook.com/Mannsleads" target="_blank"><img src={fb} alt="" className="img-fluid" /></a>
             		 <a href="https://www.instagram.com/mannsleads/" target="_blank"><img src={insta} alt="" className="img-fluid" /></a>
             		 <a href="#" target="_blank"><img src={ytb} alt="" className="img-fluid" /></a>
             	</div>
             </div>

             <div className="col-xl-12">
             	<div className="copyright_row">
             		 <span><i className="fa fa-copyright"></i> Copyright 2022. Mann's Lead's All Right Reserved. Marketing by Mann's Network's</span>
             	</div>
             </div>
		 	 
		 </div>
	</div>
</footer>


<div className="whatsapp-icon">
  <a href="https://wa.me/+918810000008" className="whatsapp" target="_blank">
    <img src="assets/img/whatspp.png" alt="" className="img-fluid" />
  </a>
  </div>


        </>
    )
}
export default Footer;