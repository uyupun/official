import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const font = 'Cica';

globalFontFace(font, {
  src: `url('/fonts/Cica-Regular.ttf') format('truetype')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/Cica-Bold.ttf') format('truetype')`,
  fontWeight: 'bold',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/Cica-Oblique.ttf') format('truetype')`,
  fontWeight: 'normal',
  fontStyle: 'oblique',
});

globalFontFace(font, {
  src: `url('/fonts/Cica-BoldOblique.ttf') format('truetype')`,
  fontWeight: 'bold',
  fontStyle: 'oblique',
});

globalStyle('body', {
  fontFamily: `${font}, sans-serif`,
});
