import path from 'path';

import { FontImagesDir } from '../constants';
import { FontItem } from '../types';
import { generatePng } from './generatePng';
import { filenameForFontVariant, varNameForFontVariant } from './name';

export async function generateImageForFontVariant(webfont: FontItem, variantKey: string) {
  let phrase = varNameForFontVariant(webfont, variantKey) + '\n';
  phrase += 'Pack my box with five\ndozen liquor jugs, please.';
  const outputFilepath = path.join(
    FontImagesDir,
    filenameForFontVariant(webfont, variantKey) + '.png'
  );
  await generatePng(outputFilepath, phrase, webfont, variantKey, 40);
}
