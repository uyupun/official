import type { HTMLAttributeAnchorTarget } from 'react';

export const getSafeLinkRel = (
  rel?: string,
  target?: HTMLAttributeAnchorTarget
): string | undefined => {
  if (target !== '_blank') return rel;

  const requiredValues = ['noreferrer', 'noopener'];
  let missingRequiredValues: string[];
  if (rel === undefined) {
    missingRequiredValues = [...requiredValues];
  } else {
    missingRequiredValues = requiredValues.filter((value) => !rel.includes(value));
  }
  if (missingRequiredValues.length === 0) return rel;
  return `${rel ?? ''} ${missingRequiredValues.join(' ')}`.trim();
};
