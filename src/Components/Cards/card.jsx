import React from 'react';
import photoImage from '../../image/photo.jpeg';

const Card = () => {
    return (
        <div className='d-flex justify-content-center '>
            
            <div className="card mb-2 mt-4 bg-black bg-white" style={{ maxWidth: '340px',maxHeight:'78px' }}>
               <div className="row g-0 ">
                  <div className="col-md-2">
                     <img src={photoImage} className="img-fluid rounded-3 p-1" alt="Card" />
                 </div>
                 <div className="col-md-8 ">
                      <div className="card-body">
                           <h6 className="card-title text-black ">CAM-1</h6>
                           <p6 className="text-black">Security vulnerability</p6>
                           
                     </div>
                 </div>
              </div>
           </div>   
            <div className="card mb-2 mt-4 bg-white " style={{ maxWidth: '340px',maxHeight:'78px' }}>
               <div className="row g-0">
                  <div className="col-md-2">
                     <img src={photoImage} className="img-fluid rounded-3 p-1" alt="Card" />
                 </div>
                 <div className="col-md-8 ">
                      <div className="card-body">
                           <h6 className="card-title text-black">CAM-2</h6>
                           <p6 className="text-black">Multi-Language support</p6>
                     </div>
                 </div>
              </div>
           </div>   
            <div className="card mb-2 mt-4 bg-white " style={{ maxWidth: '340px',maxHeight:'78px' }}>
               <div className="row g-0">
                  <div className="col-md-2 ">
                     <img src={photoImage} className="img-fluid rounded-3 p-1 mt-0 h-1 " alt="Card" />
                 </div>
                 <div className="col-md-8 ">
                      <div className="card-body">
                           <h6 className="card-title text-black">CAM-3</h6>
                           <p6 className="text-black">Enhance functionality</p6>
                           
                     </div>
                 </div>
              </div>
           </div>   
        </div>
    );
};

export default Card;

