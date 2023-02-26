import React from "react";
const BubblesG = () => {
  // bubble graph for 3rd page to shows investments and benifits 
  return (
    <div className="bubbles item-center">
    {/* time stamps  */}
      <div className="time-period">
        <span>1W</span>
        <span>1M</span>
        <span>3M</span>
        <span>1Y</span>
        <span>All</span>
      </div>
      {/* bubbles  */}
      <div className="all-bubles item-center">
        <div className="pink first">
          <p>Development</p>
          <p className="updown">$31,657</p>
        </div>
        <div className="pink second">
        <p>Bussiness</p>
        <p className="updown">$21,987</p>
        </div>
        <div className="center-div item-center">
          <div className="innermost">
            <p>Investment</p>
            <p className="updown">$76,644</p>
            <p className="updown">3 month</p>
          </div>
        </div>
        <div className="yellow"></div>
        <div className="purple purple1"></div>
        <div className="purple purple2"></div>
        <div className="purple purple3"></div>
        <div className="purple purple4"></div>
        <div className="blue blue1"></div>
        <div className="blue blue2"></div>
        <div className="blue blue3">
          <p>Finance</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="blue blue4"></div>
        <div className="blue blue5"></div>
        <div className="pink third">
          <p>Finance</p>
          <p className="updown">$23,657</p>
        </div>
        <div className="pink forth">
          <p>Design</p>
          <p className="updown">$23,657</p>
          <p className="updown">3 month</p>
        </div>
      </div>
      <div className="data">
        <div><span className="title">TREND GOOD</span><br /><span>204</span></div>
        <div><span className="title">SHOPPING VIEWS</span><br /><span>65,540</span></div>
        <div><span className="title">STORE DYNAMICS</span><br /><span>324</span></div>
      </div>
    </div>
  );
};

export default BubblesG;
