import React from "react";
import Data from "../Component/Data";
import Card from "../Component/Card";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((val, index) => (
                <Card imgsrc={val.imgsrc} title={val.title} body={val.body} key={index} webtitle={val.wetitle}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
