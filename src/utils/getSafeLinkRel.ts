import type { HTMLAttributeAnchorTarget } from 'react';

export const getSafeLinkRel = (
  rel?: string,
  target?: HTMLAttributeAnchorTarget
): string | undefined => {
  if (target !== '_blank') return rel;

  let missingRequiredValues = ['noreferrer', 'noopener'];
  if (rel !== undefined) {
    missingRequiredValues = missingRequiredValues.filter((value) => !rel.includes(value));
  }

  if (missingRequiredValues.length === 0) return rel;
  return `${rel ?? ''} ${missingRequiredValues.join(' ')}`.trim();
};
