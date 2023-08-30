

const ImageWIthContent = (props) =>
{
    const sectionName = props.sectionClass;
    const colom1 = props.colom1;  
    const colom2 = props.colom2;  
    return(
        <>
            <section className={sectionName}  style={props.style1}>
                <div className="vision_business">
                    <div className="container">
                        <div className="row">
                           
                            <div className={colom1}>
                            <div className="growth_business" data-aos="fade-up">
                                <img src={props.image} alt="" className="img-fluid" />
                            </div>
                            </div>
                            <div className={colom2}>
                            <div className="content_areas" data-aos="fade-up">
                                <div className="heading01 text-start">
                                    <h4>{ props.title }</h4>
                                </div>
                                <p>
                                    { props.text }
                                </p>
                             
                                <div className="reads">
                                    <a href={props.buttonUrl}><span>{props.buttonText}</span><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}
export default ImageWIthContent;