export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  images: {
    ogp_image_png: '/images/ogp-image.png',
    zeus: {
      zeus_mobile_avif: '/images/zeus/zeus-mobile.avif',
      zeus_mobile_png: '/images/zeus/zeus-mobile.png',
      zeus_mobile_webp: '/images/zeus/zeus-mobile.webp',
      zeus_avif: '/images/zeus/zeus.avif',
      zeus_png: '/images/zeus/zeus.png',
      zeus_webp: '/images/zeus/zeus.webp',
    },
  },
} as const;

export type StaticPath = typeof staticPath;
