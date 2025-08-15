import React, { useState, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Stepper.css";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => { },
  onFinalStepCompleted = () => { },
  backButtonText = "Back",
  nextButtonText = "Continue",
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    updateStep(totalSteps + 1);
  };

  return (
    <div className="stepper-container">
      <div className="step-indicators">
        {stepsArray.map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isComplete = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="step-indicator-wrapper">
              <div 
                className={`step-indicator ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
                onClick={() => updateStep(stepNumber)}
              >
                {isComplete ? '✓' : stepNumber}
              </div>
              {index < totalSteps - 1 && (
                <div className={`step-connector ${isComplete ? 'complete' : ''}`} />
              )}
            </div>
          );
        })}
      </div>

      <div className="step-content">
        <AnimatePresence mode="wait">
          {!isCompleted && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {stepsArray[currentStep - 1]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isCompleted && (
        <div className="step-navigation">
          {currentStep > 1 && (
            <button onClick={handleBack} className="step-button step-back">
              {backButtonText}
            </button>
          )}
          <button
            onClick={isLastStep ? handleComplete : handleNext}
            className="step-button step-next"
          >
            {isLastStep ? "Complete" : nextButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

export function Step({ children }) {
  return <div className="step-content-wrapper">{children}</div>;
}
