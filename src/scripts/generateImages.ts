import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * スマホ用の画像を生成する
 */
const generateMobileImage = async (fullPath: string, outputPath: string): Promise<void> => {
  if (fs.existsSync(outputPath)) return;
  const image = sharp(fullPath);
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
const generateDesktopImage = async (fullPath: string, outputPath: string): Promise<void> => {
  if (fs.existsSync(outputPath)) return;
  await sharp(fullPath).toFile(outputPath);
};

/**
 * /public/images 以下のディレクトリ内にある png または jpg(jpeg) ファイルを元に webp と avif ファイルを生成する
 * またそれぞれの拡張子に応じたスマホ用のファイルも生成する
 */
const generateImages = async (dirPath: string): Promise<void> => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const ignoreDirs = fs
    .readFileSync(path.join(__dirname, '../..', '.imagesignore'), 'utf-8')
    .split('\n');

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (ignoreDirs.includes(entry.name)) continue;
      await generateImages(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      console.error(
        '予期しないエントリタイプが検出されました。ファイルまたはディレクトリのみが許可されています。'
      );
      break;
    }

    const fileExtension = path.extname(fullPath);
    const fileName = path.basename(fullPath, fileExtension);

    const validFileExtensions = ['.png', '.jpg', '.jpeg'];
    if (!validFileExtensions.includes(fileExtension) || fileName.includes('mobile')) continue;

    const outputPathMobile = path.join(dirPath, `${fileName}-mobile${fileExtension}`);
    await generateMobileImage(fullPath, outputPathMobile);

    const outputPathWebp = path.join(dirPath, `${fileName}.webp`);
    const outputPathWebpMobile = path.join(dirPath, `${fileName}-mobile.webp`);
    await generateDesktopImage(fullPath, outputPathWebp);
    await generateMobileImage(fullPath, outputPathWebpMobile);

    const outputPathAvif = path.join(dirPath, `${fileName}.avif`);
    const outputPathAvifMobile = path.join(dirPath, `${fileName}-mobile.avif`);
    await generateDesktopImage(fullPath, outputPathAvif);
    await generateMobileImage(fullPath, outputPathAvifMobile);
  }
};

const directoryPath = path.join(dirname, '../..', 'public', 'images');
generateImages(directoryPath).catch(console.error);
