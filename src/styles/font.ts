import localFont from 'next/font/local';

export const cica = localFont({
  src: [
    {
      path: '../../public/fonts/Cica-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cica-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cica-RegularItalic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Cica-BoldItalic.ttf',
      weight: 'bold',
      style: 'italic',
    },
  ],
});
