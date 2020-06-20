import React from "react"

const Newsletter = () => {
    return(
        <div className="newsletter">

            <div className="newsletter-top">
            <h3 className="newsletter-title">Sign up for PS5 news </h3>
            <p className="newsletter-info">Sign up below to be among the first to receive updates as we announce them, including news on the PS5 release date, PS5 price and upcoming roster of PS5 launch games. </p>

            </div>

            
            <form method="GET">
                <div className="form-main">
                    <div className="form-sec">
                        <h2 className="form-title">Email address <span>*</span></h2>
                        <input type="text"/>
                    </div>

                    <div className="form-sec">
                        <h2 className="form-title">Confirm email address <span>*</span></h2>
                        <input type="text"/>
                    </div>
                </div>
               

               

                <div className="date-info"> 
                    <h2 className="date-title">Date of birth <span>*</span> </h2>
                    <p className="date-text">We need to know your birthday to make sure you get the right information for your age.</p>

                    <div className="date-sec">
                        <input className="column" type="number" placeholder="Type Date"/>
                        <input className="column" type="month" placeholder="Select Month"/>
                        <input className="column" type="year" placeholder="Type Year"/>
                    </div>

                </div>

                <p className="confirm-text">By clicking below you agree to receive personalized information and offers by email relating to PlayStation® and Sony from Sony Interactive Entertainment LLC.</p>

                <input className="confirm-btn" type="submit" value="Sign Up" /> 
                
            </form>

        </div>
    )
}

export default Newsletter