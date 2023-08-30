import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../Website/css/main.css';
import '../../Website/css/responsive.css';
import Navbar from "./Navbar";
import Footer from "./Footer";




const Common = () =>
{
	return(
        <>
          <Navbar />
          <Footer />
        </>
    )
}
export default Common;