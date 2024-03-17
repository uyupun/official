export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  images: {
    logos: {
      discussion: {
        discussion_mobile_avif: '/images/logos/discussion/discussion-mobile.avif',
        discussion_mobile_png: '/images/logos/discussion/discussion-mobile.png',
        discussion_mobile_webp: '/images/logos/discussion/discussion-mobile.webp',
        discussion_avif: '/images/logos/discussion/discussion.avif',
        discussion_png: '/images/logos/discussion/discussion.png',
        discussion_webp: '/images/logos/discussion/discussion.webp',
      },
      github: {
        github_mobile_avif: '/images/logos/github/github-mobile.avif',
        github_mobile_png: '/images/logos/github/github-mobile.png',
        github_mobile_webp: '/images/logos/github/github-mobile.webp',
        github_avif: '/images/logos/github/github.avif',
        github_png: '/images/logos/github/github.png',
        github_webp: '/images/logos/github/github.webp',
      },
      home: {
        home_mobile_avif: '/images/logos/home/home-mobile.avif',
        home_mobile_png: '/images/logos/home/home-mobile.png',
        home_mobile_webp: '/images/logos/home/home-mobile.webp',
        home_avif: '/images/logos/home/home.avif',
        home_png: '/images/logos/home/home.png',
        home_webp: '/images/logos/home/home.webp',
      },
      qiita: {
        qiita_mobile_avif: '/images/logos/qiita/qiita-mobile.avif',
        qiita_mobile_png: '/images/logos/qiita/qiita-mobile.png',
        qiita_mobile_webp: '/images/logos/qiita/qiita-mobile.webp',
        qiita_avif: '/images/logos/qiita/qiita.avif',
        qiita_png: '/images/logos/qiita/qiita.png',
        qiita_webp: '/images/logos/qiita/qiita.webp',
      },
      uyupun: {
        uyupun_mobile_avif: '/images/logos/uyupun/uyupun-mobile.avif',
        uyupun_mobile_png: '/images/logos/uyupun/uyupun-mobile.png',
        uyupun_mobile_webp: '/images/logos/uyupun/uyupun-mobile.webp',
        uyupun_avif: '/images/logos/uyupun/uyupun.avif',
        uyupun_png: '/images/logos/uyupun/uyupun.png',
        uyupun_webp: '/images/logos/uyupun/uyupun.webp',
      },
      uyupun_archive: {
        uyupun_archive_mobile_avif: '/images/logos/uyupun-archive/uyupun-archive-mobile.avif',
        uyupun_archive_mobile_png: '/images/logos/uyupun-archive/uyupun-archive-mobile.png',
        uyupun_archive_mobile_webp: '/images/logos/uyupun-archive/uyupun-archive-mobile.webp',
        uyupun_archive_avif: '/images/logos/uyupun-archive/uyupun-archive.avif',
        uyupun_archive_png: '/images/logos/uyupun-archive/uyupun-archive.png',
        uyupun_archive_webp: '/images/logos/uyupun-archive/uyupun-archive.webp',
      },
      x: {
        x_mobile_avif: '/images/logos/x/x-mobile.avif',
        x_mobile_png: '/images/logos/x/x-mobile.png',
        x_mobile_webp: '/images/logos/x/x-mobile.webp',
        x_avif: '/images/logos/x/x.avif',
        x_png: '/images/logos/x/x.png',
        x_webp: '/images/logos/x/x.webp',
      },
      youtube: {
        youtube_mobile_avif: '/images/logos/youtube/youtube-mobile.avif',
        youtube_mobile_png: '/images/logos/youtube/youtube-mobile.png',
        youtube_mobile_webp: '/images/logos/youtube/youtube-mobile.webp',
        youtube_avif: '/images/logos/youtube/youtube.avif',
        youtube_png: '/images/logos/youtube/youtube.png',
        youtube_webp: '/images/logos/youtube/youtube.webp',
      },
    },
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
