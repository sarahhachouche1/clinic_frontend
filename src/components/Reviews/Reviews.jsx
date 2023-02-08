import React from "react";
import "../../styles/Reviews.css";
import ReviewsHeader from "../../images/ReviewsHeader.png"
import { Button } from "../Buttons/Button";
import { Buttonappt } from "../Buttons/Buttonappt";
export const Reviews = () => {
  return (
    <>
   <div className="reviews-page">
    

<img className='Reviews_Header_img'src={ReviewsHeader} alt="ReviewsHeader"/>

 <Button/> 
 {/* <Buttonappt /> */}

</div>
<div>
<h2 className="Hone_Reviews">Check Out <span className="Big_Font_Reviews"><span className="Recent_Blue"> <br/> Recent </span>Reviews</span></h2>
</div>
</>

  )


};





