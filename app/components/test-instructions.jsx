import React from 'react';
import { Card } from './ui/card';

export function TestInstructions() {
  return (
    <Card className="instructions">
      <div className="instructions__header">
        <p className="eyebrow eyebrow--muted">Test plan</p>
        <h2>What to try</h2>
        <p className="instructions__lede">
          Use these prompts to validate the proof of concept before members see it. Cover the happy paths, then confirm
          Stella gracefully declines off-topic asks.
        </p>
      </div>

      <div className="instructions__group">
        <p className="instructions__label">Happy path</p>
        <ul className="instructions__list">
          <li>Help with bank reconciliation process</li>
          <li>Summarize bank reconciliation process</li>
          <li>Bank recon steps</li>
        </ul>
      </div>

      <div className="instructions__group">
        <p className="instructions__label">Sad path</p>
        <ul className="instructions__list">
          <li>How to give my dog a bath</li>
        </ul>
      </div>
    </Card>
  );
}
