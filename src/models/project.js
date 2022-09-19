// import assets
import mobiMarket from "../assets/works/mobi_market.png";
import realEstate from "../assets/works/real_estate.png";
import homeServices from "../assets/works/home_services.png";
import myPortfolio from "../assets/works/portfolio.png";
import yumiFood from "../assets/works/yumi_food.png";
import realEstateWeb from "../assets/works/real_estate(web).png";

export class Project {
  constructor({ id, image, title, description, url }) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.url = url;
  }
}

export const MOBILE_PROJECTS = [
  new Project({
    id: 1,
    image: mobiMarket,
    title: "Mobi Market",
    description:
      "An online trading market offers the ability to sell products and buy products with abilty to auto remove outdated products.",
    url: "https://github.com/alaazamelDev/products_management.git",
  }),
  new Project({
    id: 2,
    image: realEstate,
    title: "Real Estate Portfolio",
    description:
      "An application for a real estate company located in United Kingdom. shows a static content, has responsive design on different screen sizes.",
    url: "https://github.com/alaazamelDev/real_estate_application_flutter.git",
  }),
  new Project({
    id: 3,
    image: homeServices,
    title: "Home Services Application",
    description:
      "An application shows a different categories of home services, which you can request a specific service to be delivered from the company.",
    url: "https://github.com/alaazamelDev/store_app.git",
  }),
  new Project({
    id: 4,
    image: yumiFood,
    title: "Yumi Food",
    description:
      "an application to order foods and meals online without any need to move to the restaurant, this app is related to YumiFood restaurant.",
    url: "https://github.com/alaazamelDev/flutter_online_market_app.git",
  }),
];
export const WEB_PROJECTS = [
  new Project({
    id: 1,
    image: realEstateWeb,
    title: "Real Estate Company",
    description:
      "An application for a real estate company located in United Kingdom. shows a static content, has responsive design on different screen sizes.",
    url: "https://github.com/alaazamelDev/real_estate_application_flutter.git",
  }),
  new Project({
    id: 2,
    image: myPortfolio,
    title: "My Personal Portfolio",
    description:
      "a Simple website built with React.js to represent information, skills and previous projects in an organized way, and it can be created easily.",
    url: "https://github.com/alaazamelDev/real_estate_application_flutter.git",
  }),
];
