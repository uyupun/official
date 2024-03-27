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
  title: sprinkles({
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
