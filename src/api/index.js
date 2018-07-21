import axios from "axios";

export function getPhotoList() {
  return axios
    .get("https://picsum.photos/list/")
    .then(res => res.data.map(photo => photo.id))
    .catch(err => console.log(err));
}
