import React from 'react';

export default function ProgressTracker({ steps, currentStep }) {
  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  return (
    <div style={{ marginBottom: 20, fontFamily: 'Arial, sans-serif' }}>
      <label htmlFor="progressBar" style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>
        Progress Tracker
      </label>
      <div
        id="progressBar"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          height: 20,
          width: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: '#4CAF50',
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </div>
      <p style={{ marginTop: 8, fontWeight: 'normal' }}>
        Step {currentStep + 1} of {steps.length}: <strong>{steps[currentStep]}</strong>
      </p>
    </div>
  );
}
