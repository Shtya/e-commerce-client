import React from "react";

const Loading = () => {
  return (
    <div className="Loading" style={{ textAlign: "center" }}>

    {/* //   <div className="spinner-border" role="status" style={{width:"100px" ,height:"100px"}}>
    //     <span className="sr-only"></span>
    //   </div> */}
      
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
