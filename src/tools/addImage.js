import photo from "../images/example-2.png";

export default (tag) => {
  const img = document.createElement("img");
  img.src = photo;
  document.querySelector(tag).appendChild(img);
};
