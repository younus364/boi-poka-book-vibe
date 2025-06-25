import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


function Root(props) {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
}

export default Root;