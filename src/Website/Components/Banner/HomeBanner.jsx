import HomeBannerImage from '../../img/vector/vector_icon2.png';
import HomeBannerImage1 from '../../img/vector/header_vector.png';
import HomeBannerImage3 from '../../img/vector/header_vector3.png';
const HomeBanner = () =>
{
    return (
        <>
            <section className="header_banner" style={{
               "--bg_image1":`url(${HomeBannerImage1})`,
               "--bg_image2":`url(${HomeBannerImage3})`
            }} >
                <div className="header_vector_bg" data-aos="fade-up">
                    <img src={HomeBannerImage} alt="" className="img-fluid" />
                </div>

                <div className="header_text" data-aos="fade-up">
                    <h4>
                    Are You Looking For Leads  Generation Experts??
                    </h4>
                    <p>
                    Here we can help you to get best results at minimum budget. <br /> For more details
                    </p>
                    <div className="reads">
                    <a href="tel:+918810000008"><i class="fa fa-volume-control-phone"></i><span>8810000008</span></a>
                    </div>
                </div>

                </section>

        </>
    )
}
export default HomeBanner;