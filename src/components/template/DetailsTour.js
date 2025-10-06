import Image from "next/image";

const DetailsTour = ({
  data: {
    price,
    title,
    startDate,
    origin,
    options,
    image,
    fleetVehicle,
    endDate,
    destination,
    availableSeats,
  },
}) => {
//   console.log(data);
  return (
    <div>
      <div>
        <div>
          <div>
            <Image src={image} alt={title} width={397} height={265} />
          </div>
          <div>
            <h1>{title}</h1>
            <p>{}</p>
            <div>
              <p>تورلیدر از مبدا</p>
              <p>برنامه سفر</p>
              <p>تضمین کیفیت</p>
            </div>
            <div>
              <p>
                تومان<span>{price}</span>
              </p>
              <button>رزرو و خرید</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>مبدا</p>
            <p>{origin.name}</p>
          </div>
          <div>
            <p>تاریخ رفت</p>
            <p>23 مهر 1403</p>
          </div>
          <div>
            <p>تاریخ برگشت</p>
            <p>28 مهر 1403</p>
          </div>
          <div>
            <p>حمل و نقل</p>
            <p>{fleetVehicle}</p>
          </div>
          <div>
            <p>ظرفیت</p>
            <p>{availableSeats}</p>
          </div>
          <div>
            <p>بیمه</p>
            <p>بیمه 50 هزار دیناری</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTour;
