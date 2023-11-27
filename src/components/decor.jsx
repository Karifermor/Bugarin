import React from "react";

const Decor = ({ item }) => {
  return (
    <div className="decorGallery col-lg-4 col-md-6 col-sm-6">
      <div className="imgGallery">
        {/* <div className="col-lg-4 col-md-6 col-sm-12"> */}
          {/* Adjusted column classes */}
          {/* <img
            src={item.img}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          /> */}


<img src={item.img} class="img-fluid" alt="Responsive image"/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Decor;
