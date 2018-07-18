let duplicate = true;
let photo = {};

export function setPhotoPairs({ width, height }) {
  if (duplicate) {
    duplicate = !duplicate;
    return getPhoto(width, height);
  } else {
    duplicate = !duplicate;
    return photo;
  }
}

function getPhoto(width, height) {
  const photoId = getNewPhotoId();
  const src = getPhotoSrc(width, height, photoId);

  photo = {
    id: photoId,
    width,
    height,
    src
  };
  return photo;
}

function getNewPhotoId() {
  return Math.floor(Math.random() * 100);
}

function getPhotoSrc(width, height, photoId) {
  return `https://picsum.photos/${width}/${height}?image=${photoId}`;
}
