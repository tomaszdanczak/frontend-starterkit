import photo from "../images/webpack.jpg";

export default (tag) => {
  const img = document.createElement("img");
  img.src = photo;
  document.querySelector(tag).appendChild(img);
};
