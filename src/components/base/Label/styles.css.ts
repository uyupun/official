import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  label: sprinkles({
    display: 'inline-flex',
    fontSize: 16,
    color: 'white',
    lineHeight: 1,
  }),
  requiredMark: sprinkles({
    display: 'inline-block',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 0.5,
  }),
};

export { styles };
