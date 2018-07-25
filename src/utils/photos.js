let photo = {};
let duplicate = true;

export function setPhotoPairs(size, photoIds) {
  if (duplicate) {
    duplicate = !duplicate;
    photo = getPhoto(size, photoIds);
    return photo;
  } else {
    duplicate = !duplicate;
    return photo;
  }
}

function getPhoto({ width, height }, photoIds) {
  const photoId = getNewPhotoId(photoIds);
  const src = getPhotoSrc(width, height, photoId);

  return {
    id: photoId,
    width,
    height,
    src
  };
}

function getNewPhotoId(photoIds) {
  return photoIds[Math.floor(Math.random() * 300)];
}

function getPhotoSrc(width, height, photoId) {
  return `https://picsum.photos/${width}/${height}?image=${photoId}`;
}
