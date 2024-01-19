import { Badge } from '@/components/base/Badge';

import { technologies, type Technology } from './constant';
import { styles } from './styles.css';

import type { FC } from 'react';

type Props = {
  /**
   * バッジのラベル
   */
  label: Technology;
};

const TechnologyBadge: FC<Props> = ({ label }) => {
  return <Badge className={styles({ label })}>{technologies[label].name}</Badge>;
};

export { TechnologyBadge };
