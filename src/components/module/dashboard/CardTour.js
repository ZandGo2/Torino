import Image from "next/image";

const CardTour = ({ title, image, options, price }) => {
  return (
    <>
    <h2>همه تور ها</h2>
    <div>
      <div>
        <Image src={image} alt={title} width={278} height={159} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{options}</p>
      </div>
      <div>
        <button>رزرو</button>
        <p>
          {price}
          <span>تومان</span>
        </p>
      </div>
    </div></>
  );
};

export default CardTour;
