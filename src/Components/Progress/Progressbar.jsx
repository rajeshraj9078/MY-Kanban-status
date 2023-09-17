import React, { useState } from 'react';
import './Progressbar.css';
import { TiTick } from "react-icons/ti";

const Progressbar = () => {
    const steps = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    return (
        <>
            <div className='progressbar flex justify-content-between'>
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i ? "active" : ""} ${i < currentStep || complete ? "complete" : ""}`}
                    >
                        <div className='step'>
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <p className='text-white-500'>{step}</p>
                    </div>
                ))}
            </div>
            {!complete && (
                <button
                    className='bg-black text-white mt-0 p-3 rounded-3 justify-center'
                    onClick={() => {
                        if (currentStep === steps.length) {
                            setComplete(true);
                        } else {
                            setCurrentStep((prev) => prev + 1);
                        }
                    }}
                >
                    {currentStep === steps.length ? "Finish" : "Next"}
                </button>
            )}
        </>
    );
};

export default Progressbar;
