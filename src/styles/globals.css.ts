import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const font = 'RictyDiminished';

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Regular.ttf') format('truetype')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Bold.ttf') format('truetype')`,
  fontWeight: 'bold',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Oblique.ttf') format('truetype')`,
  fontWeight: 'normal',
  fontStyle: 'oblique',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-BoldOblique.ttf') format('truetype')`,
  fontWeight: 'bold',
  fontStyle: 'oblique',
});

globalStyle('body', {
  fontFamily: `${font}, sans-serif`,
});
