import { Link } from "react-router-dom";
function Offers(){
    return(

        <div>
            <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3">
                        <div className="sections">
                            <img className="img" src="../images/events.png"></img>
                            <h5>EVENTS</h5>
                            <p>Burgarin offers everything you need for any occasion, guaranteeing unforgettable moments.</p>
                        </div>
                        <div className="sections">
                            <img className="img" src="../images/decor.png"></img>
                            <h5>DECOR</h5>
                            <p>Burgarin boasts a diverse selection to satisfy every taste, ensuring your event's visual ambiance is nothing short of spectacular.</p>
                        </div>
                        <div className="sections">
                            <img className="img" src="../images/other.png"></img>
                            <h5>CLIENTS</h5>
                            <p>Collaborative, client-focused, and in-person consultations ensuring perfect execution of envisioned events.</p>                   
                        </div>
                    </div>
                </div>

                <div  id="contact" className="getStartedDiv text-break">
                    <div className="getStarted">
                        <h5 className="text-uppercase">Ready to transform your event into a work of art?</h5>      
                    </div>
                    <div className="contentGetStarted">
                        <h6>Contact us today to schedule a consultation. Our team at BURGARIN is eager to collaborate with you and make your event decoration dreams a reality.</h6>
                        <div className="contactHome">
                            <h6> Let's create memories together that will last a lifetime.</h6>
                            <button type="button" className="btn btn-light"><h6><Link to='/contact' className="contactLink">Contact us</Link></h6></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Offers;