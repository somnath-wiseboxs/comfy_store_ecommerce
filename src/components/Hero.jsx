import { Link } from "react-router-dom";

const hero1 =
  "https://github.com/john-smilga/react-course-v3/raw/main/12-comfy-store/final/src/assets/hero1.webp";
const hero2 =
  "https://raw.githubusercontent.com/john-smilga/react-course-v3/main/12-comfy-store/final/src/assets/hero2.webp";
const hero3 =
  "https://raw.githubusercontent.com/john-smilga/react-course-v3/main/12-comfy-store/final/src/assets/hero3.webp";
const hero4 =
  "https://raw.githubusercontent.com/john-smilga/react-course-v3/main/12-comfy-store/final/src/assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

console.log(carouselImages);

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
