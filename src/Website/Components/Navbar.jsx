import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Enquiry from "./Enquiry";
import Error from "./Error";
import BlogDetailjsx from "./BlogDetailjsx";
import logo from '../../Website/img/logo.png';


import blog1 from './../img/blog1.jpg';
import blog2 from './../img/blog2.jpg';
import blog3 from './../img/blog3.jpg';
import blog4 from './../img/blog4.jpg';
import blog5 from './../img/blog5.jpg';
import blog6 from './../img/blog6.jpg';


const Navbar = (props) =>
{

    const blogArray = [
        {
            id:1,
            image:blog1,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        },

        {
            id:2,
            image:blog2,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        },
        {
            id:3,
            image:blog3,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        },
        {
            id:4,
            image:blog4,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        },
        {
            id:5,
            image:blog5,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        },
        {
            id:6,
            image:blog6,
            day:8,
            mnthYear:'Dec 2023',
            title:'Human-centric Leadership: How Visionary Leaders Avoid',
            smallDesc:'When you’re a visionary leader, sometimes the image of what you want crystallizes in your mind like a perfect snowflake, so clear you can see almost every detail.',
            Desc:'6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis sint corporis odio magni nesciunt esse perferendis. Deleniti aspernatur dolorum adipisci veritatis officia neque consectetur magnam. Doloribus, libero, laborum. At, officia, dolore! Pariatur sit omnis optio repellat, ducimus modi officiis, excepturi numquam. Cupiditate esse, reprehenderit ipsa labore minus veniam aliquam recusandae dolorum nostrum aut, modi similique iste illo itaque officiis dolore repudiandae, porro. Amet nesciunt fugiat tempora autem quaerat at deserunt obcaecati impedit, architecto tempore neque pariatur laudantium dolor perspiciatis, modi, reprehenderit voluptate aut consequatur est alias. Animi, facilis! Earum, est. Beatae corrupti sequi enim commodi quod dolores ipsum temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus quidem cupiditate id esse illum tempora, velit quis sunt consequatur, quas possimus? Adipisci natus eius dicta ipsum, quis voluptas nihil expedita, pariatur, iure reiciendis consectetur corrupti alias eveniet illo dolorum, minima vero qui iste voluptatem earum explicabo corporis sequi. Mollitia perspiciatis magni omnis, minus laboriosam modi voluptatum quo molestias perferendis cum. Quidem expedita, fugiat illo ipsum sint asperiores aliquid, accusamus ea eaque error quam natus obcaecati repudiandae voluptatem quasi in modi velit magni consectetur numquam similique explicabo esse. Ducimus porro nostrum rem doloribus rerum cumque quae reprehenderit. Natus blanditiis mollitia possimus accusantium obcaecati expedita est odio veritatis dolores adipisci iure ab doloremque asperiores officia ut quam cumque repudiandae, quisquam illo voluptate animi illum? Quisquam sequi illo quidem quas, odit iure ipsam officia, at obcaecati. Vitae optio dolorum cumque, quasi minima obcaecati explicabo praesentium deserunt veritatis est ab tempora perferendis suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate nostrum blanditiis corporis sint alias illo est porro, provident ea rem praesentium perspiciatis inventore. Hic sint eligendi mollitia dignissimos, porro earum amet eos numquam itaque deserunt optio autem, officiis ipsam perspiciatis recusandae vero necessitatibus unde quas distinctio modi vel ut. Ipsum voluptates distinctio ab architecto, quas, beatae animi. Fugiat dolores eum nostrum doloremque quam sit velit quidem nobis et vitae eaque quibusdam, itaque tempore quae ducimus, inventore, beatae facere adipisci!'
        }
    ]

   let location = useLocation();
    let navLinkClass;
   if(location.pathname == '/')
   {
    navLinkClass = `navbar navbar-expand-lg custom_navigation`; 
   }
   else{
    navLinkClass = `navbar navbar-expand-lg custom_navigation innerPage`; 
   }
    
    return(
        <>
            
            
        {/*  ===========================================  */}

        <nav className={navLinkClass}>
                <div className="container">
                    <div className="logo_areas">
                        <a className="navbar-brand" href="/">LOGO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse navbar_collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><span>About Us</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/service" className="nav-link"><span>Services</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/blog" className="nav-link"><span>Blog</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact" className="nav-link"><span>Contact Us</span></Link>
                            </li>
                            <li className="nav-item enquire_now">
                            <Link to="/enquiry" className="nav-link"><span>Enquire Now</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

                <Routes>
                    <Route path="/firstrepo" element={<Home pathHome="homePage" />} />
                    <Route path="about" element={<About />} />
                    <Route path="service" element={<Services />} />
                    <Route path="blog" element={<Blog blogArray={blogArray} />} />
                    <Route path="/firstrepo/blog-detail/:blogdetail" element={<BlogDetailjsx blogDetailArray={blogArray} />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="enquiry" element={<Enquiry />} />
                    <Route path="*" element={<Error />} />
                </Routes>

        </>
    )
}
export default Navbar;