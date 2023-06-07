import { HTMLAttributeAnchorTarget } from 'react';

export const updateRelAccordingToTarget = (rel?: string, target?: HTMLAttributeAnchorTarget) => {
  if (target !== '_blank') return rel;

  const requiredValues = ['noreferrer', 'noopener'];
  const filteredRequiredValues = requiredValues.filter((value) => !rel?.includes(value));
  if (filteredRequiredValues.length === 0) return rel;
  return `${rel ?? ''} ${filteredRequiredValues.join(' ')}`.trim();
};
