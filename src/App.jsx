import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router";
import product from "./data/Product.json";
import Card from "./components/Card";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroCarousel from "./components/HeroCarousel";
function App() {
  const brand = [
    {
      name: "zando",
      link: "#",
      img: "https://zandokh.com/image/catalog/logo/zando/ZandoNoBorder.jpg",
    },
    {
      name: "ten11",
      link: "#",
      img: "https://zandokh.com/image/catalog/logo/ten11/Ten11NoBorder.jpg",
    },
    {
      name: "gatoni",
      link: "#",
      img: "https://zandokh.com/image/catalog/logo/gatoni/gatoni-logo.png",
    },
    {
      name: "routine",
      link: "#",
      img: "https://zandokh.com/image/catalog/logo/Routine/RoutineNoBorder.jpg",
    },
    {
      name: "361",
      link: "#",
      img: "https://zandokh.com/image/catalog/logo/361/361NoBorder.jpg",
    },
  ];
  const feature = [
    {
      name: "lifestyle",
      image:
        "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/July/3.jpg",
    },
    {
      name: "sportlife",
      image:
        "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/July/1.jpg",
    },
    {
      name: "smart casual",
      image:
        "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/July/2.jpg",
    },
  ];
  const SecondaryHero = [
    {
      name: "top",
      image:
        "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/July/4.jpg",
    },
    {
      name: "bottom",
      image:
        "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/July/5.jpg",
    },
  ];

  return (
    <>
      {/* hero section */}

      <HeroCarousel/>

      {/* brand section */}
      <section className="flex justify-between items-center ">
        {brand.map((item, index) => (
          <NavLink to={item.link} key={index}>
            <img src={item.img} alt={item.name} className="w-40 " />
          </NavLink>
        ))}
      </section>
      {/* Featured Section */}
      <section>
        {/*  */}
        <div className="flex justify-between items-center gap-5 mb-5">
          {feature.map((item, index) => (
            <NavLink key={index}>
              <img src={item.image} alt={item.name} />
            </NavLink>
          ))}
        </div>
        {/* support */}
        <div className="flex justify-between items-center gap-5">
          {SecondaryHero.map((item, index) => (
            <NavLink key={index}>
              <img src={item.image} alt={item.name} />
            </NavLink>
          ))}
        </div>
      </section>
      {/* feature product section */}
      <section className="my-20 space-y-10">
        {/* product under 50% */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="capitalize text-md sm:text-3xl font-bold">
              latest in. up to 50% off!💥
            </h2>
            <NavLink className="capitalize text-md font-bold md:text-lg">
              shop more
            </NavLink>
          </div>
          {/* scrollable card container */}
          <div className="flex  overflow-x-auto  no-scrollbar">
            {product?.products
              ?.filter(
                (product) =>
                  product.discount <= 50 &&
                  product.discount > 0 &&
                  product.category !== "Sneaker"
              )
              .splice(0, 10)
              .map((product, index) => (
                <div key={index} className="min-w-[370px]"> 
                  <Card
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    code={product.code}
                    discount={product.discount}
                    originalPrice={product.originalPrice}
                    size={product.size}      
                    color={product.colors}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* product under 80% */}
        <div>
          <div className="flex  justify-between items-center mb-5">
            <h2 className="capitalize text-md sm:text-3xl font-bold">
              ⚡Massive Slash. 80% off!
            </h2>
            <NavLink className="capitalize text-md font-bold md:text-lg">
              shop more
            </NavLink>
          </div>
          {/* scrollable card container */}
          <div className="flex overflow-x-auto  no-scrollbar">
  {product?.products
    ?.filter(
      (product) =>
        product.discount <= 80 &&
        product.discount > 50 &&
        product.category !== "Sneaker"
    )
    ?.slice(0, 10) // use slice instead of splice (splice mutates the array)
    .map((product, index) => (
      <div key={index} className="min-w-[370px]"> {/* 👈 important */}
        <Card
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          discount={product.discount}
          code={product.code}
          originalPrice={product.originalPrice}
          size={product.size}      
                    color={product.colors}
        />
      </div>
    ))}
</div>

        </div>

        {/* Footwear */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="capitalize text-md sm:text-3xl font-bold">
              New footwear drop !!
            </h2>
            <NavLink className="capitalize text-md font-bold md:text-lg">
              shop more
            </NavLink>
          </div>
          {/* scrollable card container */}
          <div className="flex  overflow-x-auto  no-scrollbar">
            {product?.products
              ?.filter(
                (product) =>
                  product.discount <= 50 &&
                  product.discount > 0 &&
                  product.category === "Sneaker"
              )?.splice(0,10)
              .map((product, index) => (
                <div key={index} className="min-w-[370px]"> 
                  <Card
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    discount={product.discount}
                    originalPrice={product.originalPrice}
                    code={product.code}
                    size={product.size}      
                    color={product.colors}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
