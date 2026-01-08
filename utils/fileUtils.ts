/**
 * 将URL转为blob
 *
 * @param url
 * @constructor
 */
export const ImageUrlToBlob = async (url: string): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((r) => r.blob())
      .then((blob) => {
        resolve(blob);
      });
  });
};
