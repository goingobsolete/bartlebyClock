function resizeImage(img, targetWidth, targetHeight) {
  let imgAspect = img.width / img.height;
  let canvasAspect = targetWidth / targetHeight;
  let newWidth, newHeight;

  if (imgAspect >= canvasAspect) {
    newWidth = targetWidth;
    newHeight = targetWidth / imgAspect;
  } else {
    newHeight = targetHeight;
    newWidth = targetHeight * imgAspect;
  }

    let resizedImage = createImage(newWidth, newHeight);
    resizedImage.copy(img, 0, 0, img.width, img.height, 0, 0, newWidth, newHeight);
    return resizedImage;
}