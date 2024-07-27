import React from 'react';
import './Questions.css';

const Questionnaire = ({ questionText, imageUrl, options }) => {
    return (
        <div className="questionnaire">
            <div className="question-container">
                {imageUrl && <img src={imageUrl} alt="question" className="question-image" />}
                <div className="question">
                    <p>{questionText}</p>
                </div>
            </div>
            <div className="options">
                {options.map((option, index) => {
                    const isEvenRow = Math.floor(index / 2) % 2 === 0;
                    const isEvenCol = index % 2 === 0;
                    const isHoverYellow = isEvenRow ? isEvenCol : !isEvenCol;
                    return (
                        <div key={index} className={`option ${isHoverYellow ? 'hover-yellow' : 'hover-blue'}`}>
                            {option.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Questionnaire;
