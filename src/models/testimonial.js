// load avatar placeholder
import avatar from "../assets/testimonial1.png";
import avatar2 from "../assets/testimonial2.png";

export class Testimonial {
  constructor({ id, image, title, description }) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

export const feedbacks = [
  new Testimonial({
    id: 1,
    image: avatar,
    title: "Khalid Maliki",
    description:
      "Mr. Alaa is one of the best programmers who combine skill, honesty and price. I would recommend dealing with him without hesitation",
  }),
  new Testimonial({
    id: 2,
    image: avatar2,
    title: "Mona Saad",
    description:
      "Speed and accuracy in completing the project efficiently and professionally, I highly recommend dealing with him.",
  }),
  new Testimonial({
    id: 3,
    image: avatar,
    title: "Khalid Maliki",
    description:
      "The best programmer I've dealt with gets the job done in the shortest period of time and the best quality Classy handling and courteous work I wish him success",
  }),
];
