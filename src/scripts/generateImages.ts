import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * スマホ用の画像を生成する
 */
const generateMobileImage = async (inputPath: string, outputPath: string): Promise<void> => {
  if (fs.existsSync(outputPath)) return;
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // 通常は発生しないフローだが型定義が`undefined`を許容しており、TSの警告を回避するために記述している
  if (metadata.width === undefined || metadata.height === undefined) return;

  await image
    .resize({
      width: Math.round(metadata.width / 2),
      height: Math.round(metadata.height / 2),
    })
    .toFile(outputPath);
};

/**
 * デスクトップ用の画像を生成する
 */
const generateDesktopImage = async (inputPath: string, outputPath: string): Promise<void> => {
  if (fs.existsSync(outputPath)) return;
  await sharp(inputPath).toFile(outputPath);
};

/**
 * /public/images 以下のディレクトリ内にある png または jpg(jpeg) ファイルを元に webp と avif ファイルを生成する
 * またそれぞれの拡張子に応じたスマホ用のファイルも生成する
 */
const generateImages = async (imagesPath: string, ignorePath: string): Promise<void> => {
  const images = fs.readdirSync(imagesPath, { withFileTypes: true });
  const ignoreDirs = fs.readFileSync(ignorePath, 'utf-8').split('\n');

  for (const image of images) {
    const imagePath = path.join(imagesPath, image.name);

    if (image.isDirectory()) {
      if (ignoreDirs.includes(image.name)) continue;
      await generateImages(imagePath, ignorePath);
      continue;
    }

    if (!image.isFile()) {
      console.error(
        '予期しないエントリタイプが検出されました。ファイルまたはディレクトリのみが許可されています。'
      );
      break;
    }

    const imageExtension = path.extname(imagePath);
    const imageName = path.basename(imagePath, imageExtension);

    const validImageExtensions = ['.png', '.jpg', '.jpeg'];
    if (!validImageExtensions.includes(imageExtension) || imageName.includes('mobile')) continue;

    const outputMobilePath = path.join(imagesPath, `${imageName}-mobile${imageExtension}`);
    await generateMobileImage(imagePath, outputMobilePath);

    const outputWebpPath = path.join(imagesPath, `${imageName}.webp`);
    const outputWebpMobilePath = path.join(imagesPath, `${imageName}-mobile.webp`);
    await generateDesktopImage(imagePath, outputWebpPath);
    await generateMobileImage(imagePath, outputWebpMobilePath);

    const outputAvifPath = path.join(imagesPath, `${imageName}.avif`);
    const outputAvifMobilePath = path.join(imagesPath, `${imageName}-mobile.avif`);
    await generateDesktopImage(imagePath, outputAvifPath);
    await generateMobileImage(imagePath, outputAvifMobilePath);
  }
};

const imagesPath = path.join(dirname, '../..', 'public', 'images');
const ignorePath = path.join(dirname, '../..', '.imagesignore');
generateImages(imagesPath, ignorePath).catch(console.error);
