import React from 'react';
import './IntroComponent.css';

const IntroComponent = () => {
  return (
    <div className="container">
      <h1 className="row text-center intro">Find the BEST food FESTS in your area!</h1> 
        <div className="row">       
          <div className="col-6 col-md-4 text-center">
            <h3>What</h3>
            <p>A web app that will allow you to find all the best food festivals in your area</p>
            </div>
          <div className="col-6 col-md-4 text-center">
            <h3>Why</h3>
            <p>Because I am so sad when I miss out on an awesome food festival and I learn about it a week laster from everyone else's social media account</p>
          </div>
          <div className="col-6 col-md-4 text-center">
            <h3>How</h3>
            <p>Use this web app to get the latest and greatest information about food fesitvals in your area and be in the know!</p>
          </div>
          
        </div>
    </div>
  )

}

export default IntroComponent;