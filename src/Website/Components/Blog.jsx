
const Blog = (props) =>
{   
    return(
        <>
            {/* blogArray */}
            <section className="blog-page-section">
                <div className="blog-page-section-container">
                    <div className="container">
                        <div className="row justify-content-center">

                            {
                                props.blogArray.map((blogArray,index) =>{
                                    const linkID = `/blog-detail/${blogArray.id}`;
                                    return(
                                    <div className="col-xl-4 col-sm-6 wow animated animate__fadeInUp" key={index}>
                                    <div className="blog-box-home">
                                        <div className="card position-relative">
                                            <img src={blogArray.image} className="blog_image" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{blogArray.title}</h5>
                                                <p className="card-text">{blogArray.smallDesc} </p>
                                                <div className="text-center">
                                                    <a href={linkID} className="stretched-link">Read More</a>
                                                </div>
                                            </div>
                                        </div>
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
export default Blog;