import Image from "next/image";

const Phone = () => {
  return (
    <div>
      <div>
        <Image src="/images/Taking.png" alt="" width={308} height={225}/>
        <div>
            <p>
                <span>تورینو</span>
                خرید تلفی از 
            </p>
            <p>به هرکجا که میخواهید!</p>
        </div>
      </div>
      <div>
        <p>
          <Image
            src="/images/call1.png"
            alt="phone icons"
            width={24}
            height={24}
          />
          <span>021-1840</span>
        </p>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
  );
};

export default Phone;
