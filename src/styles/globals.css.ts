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
  src: `url('/fonts/Cica-RegularItalic.ttf') format('truetype')`,
  fontWeight: 'normal',
  fontStyle: 'italic',
});

globalFontFace(font, {
  src: `url('/fonts/Cica-BoldItalic.ttf') format('truetype')`,
  fontWeight: 'bold',
  fontStyle: 'italic',
});

globalStyle('body', {
  fontFamily: `${font}, sans-serif`,
});
