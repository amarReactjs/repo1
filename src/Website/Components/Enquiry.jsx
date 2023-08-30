import { useState } from 'react';
import enquiry from '../img/vectr/enquire.png';
const Enquiry = () =>
{   
    const [formData,SetformData] = useState({
        fname:'',
        email:'',
        mobile:'',
        subject:'',
        message:''
    });
    const inputEvent = (event) =>
    {
        const {name,value} = event.target;
        SetformData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    const formSubmited = (event) =>
    {
        event.preventDefault();
        SetformData({
            fnafnamem:formData.fname,
            email:formData.email,
            mobile:formData.mobile,
            subject:formData.subject,
            message:formData.message,
        });

        console.log(formData);
    }

    return(
        <>
            <section className="info_area" id="">
                    <div className="info_area_container">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7">
                                <div className="enquiry_form_container">
                                    <div className="enquiry_container_text">
                                        <form action="#" onSubmit={formSubmited} method="post" autoComplete="off">
                                            <div className="row justify-content-center">
                                            <div className="col-xl-12">
                                                <div className="text_center mb-4">
                                                    <h4 className="inner_heading mb-2">Request a Call Back</h4>
                                                    <p>
                                                        Thank for Reaching Out To Us. We will Ensure That Your Enquiry is Answered ASAP.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input_div">
                                                    <input type="text" id="name" className="form-control inputs" name='fname' onChange={inputEvent} value={formData.fname} required />
                                                    <label htmlFor="name">Full Name <span className="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input_div">
                                                    <input type="text" id="email" className="form-control inputs" name='email'  onChange={inputEvent} value={formData.email} required />
                                                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input_div">
                                                    <input type="number" id="phone" className="form-control inputs" name='mobile'  onChange={inputEvent} value={formData.mobile} required />
                                                    <label htmlFor="phone">Mobile No. <span className="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input_div">
                                                    <input type="text" id="subject" className="form-control inputs" name='subject'  onChange={inputEvent} value={formData.subject} required />
                                                    <label htmlFor="subject">Subject <span className="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="input_div">
                                                    <textarea name="" id="" cols="30" rows="4" className="form-control inputs" name="message"  onChange={inputEvent} value={formData.message} required></textarea>
                                                    <label htmlFor="message">Message <span className="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-12 text_center">
                                                <input type="submit" value="Enquire Now" className="submit" />
                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-5 align-self-center">
                                <div className="banner_image"><img src={enquiry} alt="" className="img-fluid" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
        </>
    )
}
export default Enquiry;