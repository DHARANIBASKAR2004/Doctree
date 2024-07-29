
import './ApSectionSix.css'

import React, { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);``
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};
 
const ApSectionSix = () => {
    return (
        <>
        <div className="container1">
            {/* <h2> */}
                <ReadMore>
                Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.
                </ReadMore>
            {/* </h2> */}
        </div>
        <div className="container2">
            {/* <h2> */}
                <ReadMore>
                We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.
                </ReadMore>
            {/* </h2> */}
        </div>
        <div className="container3">
            {/* <h2> */}
                <ReadMore>
                In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.
                </ReadMore>
            {/* </h2> */}
        </div>
        </>
        
    );
};
 
export default ApSectionSix;