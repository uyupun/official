// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (_: any, res: any) => {
  res.status(200).json({ name: 'John Doe' });
};

export default hello;
