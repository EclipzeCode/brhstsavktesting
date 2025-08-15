import React, { useState, Children, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Stepper.css";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  backButtonText = "Back",
  nextButtonText = "Next",
  className = "",
  disableStepIndicators = false,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);
  const [containerHeight, setContainerHeight] = useState("auto");
  const contentRef = useRef(null);

  const steps = Children.toArray(children);
  const totalSteps = steps.length;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;
  const isCompleted = currentStep > totalSteps;

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContainerHeight(contentRef.current.offsetHeight);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
      onStepChange(currentStep + 1);
    } else if (currentStep === totalSteps) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
      onFinalStepCompleted();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
      onStepChange(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    if (step !== currentStep && !disableStepIndicators) {
      setDirection(step > currentStep ? 1 : -1);
      setCurrentStep(step);
      onStepChange(step);
    }
  };

  return (
    <div className={`stepper-container ${className}`} {...rest}>
      {!disableStepIndicators && (
        <div className="step-indicators">
          {steps.map((_, index) => {
            const stepNumber = index + 1;
            return (
              <React.Fragment key={stepNumber}>
                <StepIndicator
                  step={stepNumber}
                  currentStep={currentStep}
                  onClickStep={handleStepClick}
                  disableStepIndicators={disableStepIndicators}
                />
                {index < steps.length - 1 && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      <StepContentWrapper
        isCompleted={isCompleted}
        currentStep={currentStep}
        direction={direction}
        className="step-content-wrapper"
      >
        {!isCompleted ? (
          <SlideTransition
            direction={direction}
            onHeightReady={(height) => setContainerHeight(height)}
          >
            <div ref={contentRef}>
              {steps[currentStep - 1]}
            </div>
          </SlideTransition>
        ) : (
          <div className="completion-message">
            <CheckIcon className="check-icon" />
            <h3>All steps completed!</h3>
          </div>
        )}
      </StepContentWrapper>

      {!isCompleted && (
        <div className="step-controls">
          <button
            onClick={handleBack}
            disabled={isFirstStep}
            className="step-button back-button"
          >
            {backButtonText}
          </button>
          <button
            onClick={handleNext}
            className="step-button next-button"
          >
            {isLastStep ? "Complete" : nextButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current && onHeightReady) {
      onHeightReady(ref.current.offsetHeight);
    }
  });

  return (
    <motion.div
      ref={ref}
      key={direction}
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={direction}
      className="slide-content"
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  hidden: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
};

export function Step({ children }) {
  return <div className="step">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <button
      className={`step-indicator ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onClick={() => onClickStep(step)}
      disabled={disableStepIndicators}
    >
      {isCompleted ? <CheckIcon /> : step}
    </button>
  );
}

function StepConnector({ isComplete }) {
  return (
    <div className={`step-connector ${isComplete ? 'complete' : ''}`}>
      <div className="connector-line" />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}
