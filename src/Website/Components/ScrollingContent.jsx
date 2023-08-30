import client1 from '../../Website/img/client/1.png';
import client2 from '../../Website/img/client/2.png';
import client3 from '../../Website/img/client/3.png';
import client4 from '../../Website/img/client/4.png';
import client5 from '../../Website/img/client/5.png';
import client6 from '../../Website/img/client/6.png';
import client8 from '../../Website/img/filter-bg.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


const ourClientBg = `url(${client8})`;

const ScrollingContent = () =>
{
    
    
    const client = [
        client1,client2,client3,client4,client5,client6
    ];


    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 6,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    };

    return (
        <>
            <section className="clients">

            <svg id="wave1" style={{transform:"rotate(0deg)",transition: "0.3s"}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(53, 239, 238, 1)" offset="0%"></stop><stop stop-color="rgba(78, 122, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)",opacity:1}} fill="url(#sw-gradient-0)" d="M0,40L26.7,33.3C53.3,27,107,13,160,10C213.3,7,267,13,320,28.3C373.3,43,427,67,480,66.7C533.3,67,587,43,640,43.3C693.3,43,747,67,800,68.3C853.3,70,907,50,960,46.7C1013.3,43,1067,57,1120,63.3C1173.3,70,1227,70,1280,71.7C1333.3,73,1387,77,1440,75C1493.3,73,1547,67,1600,61.7C1653.3,57,1707,53,1760,56.7C1813.3,60,1867,70,1920,70C1973.3,70,2027,60,2080,58.3C2133.3,57,2187,63,2240,56.7C2293.3,50,2347,30,2400,21.7C2453.3,13,2507,17,2560,20C2613.3,23,2667,27,2720,33.3C2773.3,40,2827,50,2880,53.3C2933.3,57,2987,53,3040,58.3C3093.3,63,3147,77,3200,76.7C3253.3,77,3307,63,3360,53.3C3413.3,43,3467,37,3520,36.7C3573.3,37,3627,43,3680,48.3C3733.3,53,3787,57,3813,58.3L3840,60L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"></path></svg>

	<svg id="wave2" style={{transform:"rotate(0deg)",transition: "0.3s"}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(53, 239, 238, 1)" offset="0%"></stop><stop stop-color="rgba(78, 122, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)",opacity:1}} fill="url(#sw-gradient-0)" d="M0,40L26.7,33.3C53.3,27,107,13,160,10C213.3,7,267,13,320,28.3C373.3,43,427,67,480,66.7C533.3,67,587,43,640,43.3C693.3,43,747,67,800,68.3C853.3,70,907,50,960,46.7C1013.3,43,1067,57,1120,63.3C1173.3,70,1227,70,1280,71.7C1333.3,73,1387,77,1440,75C1493.3,73,1547,67,1600,61.7C1653.3,57,1707,53,1760,56.7C1813.3,60,1867,70,1920,70C1973.3,70,2027,60,2080,58.3C2133.3,57,2187,63,2240,56.7C2293.3,50,2347,30,2400,21.7C2453.3,13,2507,17,2560,20C2613.3,23,2667,27,2720,33.3C2773.3,40,2827,50,2880,53.3C2933.3,57,2987,53,3040,58.3C3093.3,63,3147,77,3200,76.7C3253.3,77,3307,63,3360,53.3C3413.3,43,3467,37,3520,36.7C3573.3,37,3627,43,3680,48.3C3733.3,53,3787,57,3813,58.3L3840,60L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"></path></svg>   
    <div class="iconnic_container" style={{backgroundImage:ourClientBg}}></div>
                <div className="clients_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="heading01">
                                <h4>Our Clients</h4>
                            </div>
                            
                            <OwlCarousel id="clients" className="owl-carousel owl-theme" {...options}>
                                    {
                                        client.map((data,ind)=>{
                                            return(
                                                 <div className="item">
                                                        <div className="logo">
                                                            <img src={data} alt="" className="img-fluid" />
                                                        </div>
                        		 	 	 	 	 </div>

                                            )
                                        })
                                    }
                            </OwlCarousel>

                        </div>
                    </div>
                </div>
                </div>
                </section>
        </>
    )
}
export default ScrollingContent;