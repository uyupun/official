import { HTMLAttributeAnchorTarget } from 'react';

export const updateRelAccordingToTarget = (rel?: string, target?: HTMLAttributeAnchorTarget) => {
  if (target !== '_blank') return rel;

  const requiredValues = ['noreferrer', 'noopener'];
  const missingRequiredValues = requiredValues.filter((value) => !rel?.includes(value));
  if (missingRequiredValues.length === 0) return rel;
  return `${rel ?? ''} ${missingRequiredValues.join(' ')}`.trim();
};
