import { CiEdit } from "react-icons/ci";

const page = () => {
  return (
    <div>
      <InformationAccountData />
      <InformationPersonalData />
      <InformationBankData />
    </div>
  );
};

export default page;

const InformationAccountData = () => {
  return (
    <div>
      <p>اطلاعات حساب کاربری</p>
      <div>
        <div>
          <span>شماره موبایل</span>
          <span>09224521125</span>
        </div>
        <div>
          <span>ایمیل</span>
          <span>--</span>
        </div>
        <button>
          <CiEdit />
          افزودن
        </button>
      </div>
    </div>
  );
};

const InformationPersonalData = () => {
  return (
    <div>
      <div>
        <p>اطلاعات شخصی</p>
        <button>
          <CiEdit />
          ویرایش اطلاعات
        </button>
      </div>
      <div>
        <div>
          <span>نام و نام خانوادگی</span>
          <span>مانیا رحیمی</span>
        </div>
        <div>
          <span>کدملی</span>
          <span>3721156232</span>
        </div>
      </div>
      <div>
        <div>
          <span>جنسیت</span>
          <span>زن</span>
        </div>
        <div>
          <span>تاریخ تولد</span>
          <span>1383/10/17</span>
        </div>
      </div>
    </div>
  );
};

const InformationBankData = () => {
  return (
    <div>
      <div>
        <p>اطلاعات حساب بانکی</p>
        <button>
          <CiEdit />
          ویرایش اطلاعات
        </button>
      </div>
      <div>
        <div>
          <span>شماره شبا</span>
          <span>-</span>
        </div>
        <div>
          <span>شماره کارت</span>
          <span>6037991752468520</span>
        </div>
      </div>
      <div>
        <span>شماره حساب</span>
        <span>-</span>
      </div>
    </div>
  );
};
