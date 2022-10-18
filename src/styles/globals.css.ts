import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const font = 'RictyDiminished';

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Regular.ttf')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Bold.ttf')`,
  fontWeight: 'bold',
  fontStyle: 'normal',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-Oblique.ttf')`,
  fontWeight: 'normal',
  fontStyle: 'oblique',
});

globalFontFace(font, {
  src: `url('/fonts/RictyDiminished-BoldOblique.ttf')`,
  fontWeight: 'bold',
  fontStyle: 'oblique',
});

globalStyle('body', {
  fontFamily: `${font}, sans-serif`,
});
