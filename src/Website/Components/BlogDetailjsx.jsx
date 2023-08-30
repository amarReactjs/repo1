import { useParams } from "react-router-dom";

const BlogDetailjsx = (props) =>
{   
    let {blogdetail} = useParams();
    blogdetail = (blogdetail - 1);
    console.log(blogdetail);
    return(
        <>
          {/* {props.blogDetailArray[blogdetail].Desc} */}
          <section className="blog-page-section blog__details">
                <div className="blog-page-section-container">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                            <div className="blog-box">
                                <div className="image">
                                    <img src={props.blogDetailArray[blogdetail].image} alt="" className="img-fluid" />
                                    <div className="date">
                                        <span className="day">{props.blogDetailArray[blogdetail].day}</span>
                                        <span className="mnth-year">{props.blogDetailArray[blogdetail].mnthYear}</span> 
                                    </div>
                                </div>
                                <h6>{props.blogDetailArray[blogdetail].title}</h6>
                                <div className="blog-detail">
                                    <p>
                                        {props.blogDetailArray[blogdetail].Desc}
                                    </p>
                                    
                                </div>
                            </div>
                            </div>
                            {/* <!-- ============================ --> */}
                            <div className="col-xl-4">
                            <div className="sidebar-conatiner">
                                <div className="heading">
                                    <h4 data-text="">Blog</h4>
                                </div>
                                {/* <!-- ============================ --> */}
                                <div className="sidebar_row_container">

                                {
                                props.blogDetailArray.map((blogArray,index) =>{
                                    const linkID = `/blog-detail/${blogArray.id}`;
                                    return(

                                    <div className="blog-sidebar-row position-relative">
                                        <a href={linkID} className="stretched-link"></a>
                                        <div className="image">
                                        <img src={blogArray.image}  alt="" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                        <h5>{blogArray.title}</h5>
                                        <div className="detail-content">
                                            <p>
                                            {blogArray.smallDesc}
                                            </p>
                                            <div className="date"><i className="fa fa-calendar"></i><span>{blogArray.day} {blogArray.mnthYear}</span></div>
                                        </div>
                                        </div>
                                    </div>
                                        ) 
                                    })
                                    }
                                </div>
                                {/* <!-- ============================ --> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}
export default BlogDetailjsx;