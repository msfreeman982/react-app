import React from 'react';
import './ProgressIndicator.css';


const ProgressIndicator = ({steps}) => {
    return (
        <div className="container">
            <ul className="progressbar">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className={`${step.completed ? 'completed' : ''} ${index === 0 ? 'active' : ''}`}
                    >
                        <span>{step.name}</span>
                        {step.substeps && (
                            <div className="substeps">
                                <div className="substeps-row">
                                    {[...Array(step.substeps)].map((_, i) => (
                                        <div key={i} className="slider-handle"/>
                                    ))}
                                </div>
                            </div>
                        )}
                        {index !== steps.length - 1 && <div className="progressbar-line"/>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProgressIndicator;