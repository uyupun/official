import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  section: sprinkles({
    textAlign: 'center',
  }),
  heading: sprinkles({
    marginBottom: {
      mobile: 6,
      desktop: 10,
    },
  }),
  vision: sprinkles({
    fontSize: {
      mobile: 24,
      desktop: 36,
    },
    color: 'white',
    lineHeight: 1.3,
    marginBottom: {
      mobile: 3,
      desktop: 5,
    },
  }),
  strong: sprinkles({
    fontWeight: 'bold',
  }),
  description: sprinkles({
    textAlign: 'left',
  }),
};

export { styles };
