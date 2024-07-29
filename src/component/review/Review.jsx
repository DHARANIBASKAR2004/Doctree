import React from 'react';
import './review.css';
import { assets } from '../../assets/assets.jsx';

const Review = () => {
    const reviews = [
        {
            Image: assets.reviewicon,
            Name: "Aswanth",
            Message: "I've been using Doctree for the past six months, and it has truly transformed the way I manage my healthcare. The platform is incredibly easy to use, and the ability to book appointments online has saved me so much time."
        },
        {
            Image: assets.reviewicon,
            Name: "Yogesh",
            Message: "Doctree has been a lifesaver for me and my family. With two young children, finding time for doctor visits can be challenging. The online consultation option has made it so much easier to get quick medical advice without leaving the house."
        },
        {
            Image: assets.reviewicon,
            Name: "Kishore",
            Message: "My experience with Doctree has been mostly positive. The platform is user-friendly, and the appointment booking process is straightforward. I appreciate the detailed doctor profiles and patient reviews, which helped me find the right specialist."
        },
        {
            Image: assets.reviewicon,
            Name: "Vijay",
            Message: "After struggling to find a good dermatologist, I decided to try Doctree. The search feature allowed me to find a highly-rated specialist in my area, and booking an appointment was a breeze. My consultation went smoothly, and the doctor was very attentive and professional."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },
        {
            Image: assets.reviewicon,
            Name: "Kundappan",
            Message: "Doctree has exceeded my expectations in every way. The 24/7 service is incredibly convenient, especially for someone with a busy schedule like mine. I've used both the online and in-person consultation options, and both experiences were top-notch."
        },

    ];

    return (
      <>
        <div className="App">
           
            <div className="card-container">
             
                {reviews.map((review, index) => (
                    <div key={index} className="card">
                        <img src={review.Image} alt={`Review by ${review.Name}`} className="card-image" />
                        <p className="reviewName">{review.Name}</p>
                        <p className="Message">{review.Message}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Review;