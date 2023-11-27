
function About(){
    return(
        <div>
            <div className="container text-center">

                <h3>Meet the Team Behind Our Passion</h3>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3">
                    <div className="teamContent">
                        <img className="img" src="../images/employee-ana.png"></img>
                        <h5>Ana - Office Manager</h5>
                        <p>Originally from Uruguay, Ana was a radio host and an accomplished event organizer, having honed her skills in Uruguay, Brazil, and Argentina. Fluent in Portuguese as a second language, Ana's arrival in the United States came at a crucial time when we needed her expertise most. With nearly five years of residence in the country, Ana's experience and talents have been a valuable addition to our team.</p>
                    </div>
                    <div className="teamContent">
                        <img className="img" src="../images/employee-veronica.png"></img>
                        <h5>Veronica - The Founder</h5>
                        <p>Veronica Bugarin, a resilient Mexican entrepreneur, embarked on her US journey a decade ago, founding 'Bugarin Events and Decor' in South Carolina. Today, her company stands as the undisputed go-to for event planning and decor, captivating the hearts of the local Latino community and beyond, a testament to her remarkable journey and unwavering dedication to crafting unforgettable experiences.</p>
                    </div>
                </div>
            </div>


            <div className="why">
                <h3>Why Choose BURGARIN?</h3>
                    
                <div className="whyContent">
                    <h6>Stress-Free Planning:</h6>
                    <p>Sit back, relax, and enjoy your event. We take care of every detail, from concept to installation, so you can focus on making memories.</p>
                </div>

                <div className="whyContent">
                    <h6>Budget-Friendly Options:</h6>
                    <p>We offer a range of packages to suit various budgets without compromising on the quality of our work.</p>
                </div>
               
                <div className="whyContent">
                    <h6>Client-Centric Approach:</h6>
                    <p>Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life.</p>
                </div>
                    
            </div>
        </div>
    )
}

export default About;