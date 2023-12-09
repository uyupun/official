const technologies = {
  expo: {
    name: 'Expo',
    color: '#000000',
  },
  fastApi: {
    name: 'FastAPI',
    color: '#009485',
  },
} as const;

type Technology = keyof typeof technologies;

export { technologies, type Technology };
