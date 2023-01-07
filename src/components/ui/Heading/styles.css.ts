import { sprinkles } from '../../../styles/sprinkles.css';

const styles = {
  common: sprinkles({
    lineHeight: 'heading',
    fontWeight: 'bold',
    color: 'black',
  }),
  h1: sprinkles({
    fontSize: {
      mobile: 32,
      desktop: 48,
    },
  }),
  h2: sprinkles({
    fontSize: {
      mobile: 24,
      desktop: 36,
    },
  }),
};

export { styles };
