const reviews = [
  {
    id: "1",
    picture: "face1.PNG",
    name: "John",
    position: "Top Executive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta explicabo quo labore accusamus itaque placeat ducimus. Dignissimos et asperiores fugit quo dolorum sed laborum.",
  },
  {
    id: "2",
    picture: "face2.PNG",
    name: "Martha",
    position: "Mascott",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta explicabo quo labore accusamus itaque placeat ducimus. Dignissimos et asperiores fugit quo dolorum sed laborum.",
  },
  {
    id: "3",
    picture: "face3.PNG",
    name: "Jenifer",
    position: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta explicabo quo labore accusamus itaque placeat ducimus. Dignissimos et asperiores fugit quo dolorum sed laborum.",
  },
];

let slideCounter = 0;

const picture = document.querySelector(".picture");
const personName = document.querySelector(".name");
const position = document.querySelector(".position");
const description = document.querySelector(".description");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");

leftButton.addEventListener("click", slider);
rightButton.addEventListener("click", slider);

function slider(slide) {
  switch (slide) {
    case "1":
      picture.src =
        "http://127.0.0.1:5500/Simple-Js-Project/ReviewCarousel/assets/" +
        reviews[0].picture;
      personName.innerHTML = reviews[0].name;
      position.innerHTML = reviews[0].position;
      description.innerHTML = reviews[0].description;
      break;
    case "2":
      picture.src =
        "http://127.0.0.1:5500/Simple-Js-Project/ReviewCarousel/assets/" +
        reviews[1].picture;
      personName.innerHTML = reviews[1].name;
      position.innerHTML = reviews[1].position;
      description.innerHTML = reviews[1].description;
      break;
    case "3":
      "http://127.0.0.1:5500/Simple-Js-Project/ReviewCarousel/assets/" +
        reviews[2].picture;
      personName.innerHTML = reviews[2].name;
      position.innerHTML = reviews[2].position;
      description.innerHTML = reviews[2].description;
      break;
    default:
      return;
  }
}
