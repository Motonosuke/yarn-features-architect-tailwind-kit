type ImagePaths = {
  [key in string]: `/${string}`;
};

export const IMAGE_PATHS = {
  SAMPLE: '/images/sample.png',
} as const satisfies ImagePaths;
