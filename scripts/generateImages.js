const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const directoryPath = path.join(__dirname, '..', 'public', 'images');
const fileExtensions = ['.png', '.jpg', '.jpeg'];

/**
 * スマホ用の画像を生成する
 * @param {string} fullPath
 * @param {string} outputPath
 */
const generateMobileImage = async (fullPath, outputPath) => {
  const image = sharp(fullPath);
  const metadata = await image.metadata();
  await image
    .resize({
      width: Math.round(metadata.width / 2),
      height: Math.round(metadata.height / 2),
    })
    .toFile(outputPath);
};

/**
 * /public/images 以下のディレクトリ内にある png または jpg(jpeg) ファイルを元に webp と avif ファイルを生成する
 * またそれぞれの拡張子に応じたスマホ用のファイルも生成する
 * @param {string} dirPath
 */
const generateImages = async (dirPath) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await generateImages(fullPath);
    } else if (entry.isFile()) {
      const fileExtension = path.extname(fullPath);
      const fileName = path.basename(fullPath, fileExtension);

      if (fileName.includes('mobile')) return;

      if (fileExtensions.includes(fileExtension)) {
        const outputPathMobile = path.join(dirPath, `${fileName}-mobile${fileExtension}`);

        const outputPathWebp = path.join(dirPath, `${fileName}.webp`);
        const outputPathWebpMobile = path.join(dirPath, `${fileName}-mobile.webp`);

        const outputPathAvif = path.join(dirPath, `${fileName}.avif`);
        const outputPathAvifMobile = path.join(dirPath, `${fileName}-mobile.avif`);

        if (!fs.existsSync(outputPathMobile)) {
          // モバイル用のファイルの生成
          await generateMobileImage(fullPath, outputPathMobile);
        }

        if (!fs.existsSync(outputPathWebp)) {
          // デスクトップ用のwebpファイルの生成
          await sharp(fullPath).toFile(outputPathWebp);
        }

        if (!fs.existsSync(outputPathWebpMobile)) {
          // モバイル用のwebpファイルの生成
          await generateMobileImage(fullPath, outputPathWebpMobile);
        }

        if (!fs.existsSync(outputPathAvif)) {
          // デスクトップ用のavifファイルの生成
          await sharp(fullPath).avif().toFile(outputPathAvif);
        }

        if (!fs.existsSync(outputPathAvifMobile)) {
          // モバイル用のavifファイルの生成
          await generateMobileImage(fullPath, outputPathAvifMobile);
        }
      }
    }
  }
};

generateImages(directoryPath).catch(console.error);
