import Carousel from "./carousel";
import Welcome from "./welcome";
import Offers from "./offers";
import { Link } from "react-router-dom";



function Home(){
    return(
        <div className="homeContainer">
            <Carousel/>
            <Welcome/>
            <Offers/>
        </div>
    )
}

export default Home;