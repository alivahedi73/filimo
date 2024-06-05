import { useState } from "react";
import Bottom from "./Bottom";
import Pics from "./Pics";

const Best = () => {
  let [flag_type, set_type] = useState(1);

  const serial = (e) => {
    set_type(1);
    console.log(flag_type);
  };

  const movie = () => {
    set_type(2);
    console.log(flag_type);
  };

  const test = [
    {
      id: 1,
      name: "سریال",
      list: [
        {
          id: 1,
          adres: "../../../public/image/best/one.webp",
          detail: {
            name: "اسکار",
            fname: "کارگردان: مهران مدیری",
            text: "تنها یک مسابقه تا مشخص شدن برنده  ",
            logo: "../../../public/image/best/second/oscar_logo.webp",
            sample: "../../../public/image/best/second/sample.web",
          },
        },
        {
          id: 2,
          adres: "../../../public/image/best/two.webp",
          detail: {
            name: "کاردان",
            fname: "کارگردان: محمد رضا رضائیان",
            text: "ایجاد فرصت های جدید برای سرمایه گذاری ",
            logo: "../../../public/image/best/second/karman_logo.webp",
            sample: "../../../public/image/best/second/sample_kardan.webp",
          },
        },
        {
          id: 3,
          adres: "../../../public/image/best/three.webp",
          detail: {
            name: "اسکار",
            fname: "کارگردان: مهران مدیری",
            text: "تنها یک مسابقه تا مشخص شدن برنده  ",
            logo: "../../../public/image/best/second/oscar_logo.webp",
            sample: "../../../public/image/best/second/sample.web",
          },
        },
        {
          id: 4,
          adres: "../../../public/image/best/four.webp",
          detail: {
            name: "کاردان",
            fname: "کارگردان: محمد رضا رضائیان",
            text: "ایجاد فرصت های جدید برای سرمایه گذاری ",
            logo: "../../../public/image/best/second/karman_logo.webp",
            sample: "../../../public/image/best/second/sample_kardan.webp",
          },
        },
        {
          id: 5,
          adres: "../../../public/image/best/five.webp",
          detail: {
            name: "اسکار",
            fname: "کارگردان: مهران مدیری",
            text: "تنها یک مسابقه تا مشخص شدن برنده  ",
            logo: "../../../public/image/best/second/oscar_logo.webp",
            sample: "../../../public/image/best/second/sample.web",
          },
        },
      ],
    },
    {
      id: 2,
      name: "فیلم",
      list: [
        { id: 1, adres: "../../../public/image/best/film/one.webp" },
        { id: 2, adres: "../../../public/image/best/film/two.webp" },
        { id: 3, adres: "../../../public/image/best/film/three.webp" },
        { id: 4, adres: "../../../public/image/best/film/four.webp" },
        { id: 5, adres: "../../../public/image/best/film/five.webp" },
      ],
    },
  ];

  //   const data = [
  //     { adres: "../../../public/image/best/one.webp" },
  //     { adres: "../../../public/image/best/two.webp" },
  //     { adres: "../../../public/image/best/three.webp" },
  //     { adres: "../../../public/image/best/four.webp" },
  //     { adres: "../../../public/image/best/five.webp" },
  //   ];
  return (
    <div className="w-[100%] h-[877px]  flex justify-center mt-[30px] ">
      <div className="w-[100%] h-[100%] max-w-[1400px] flex flex-col items-center justify-center">
        <div className="top w-[98%] h-[314px] ">
          <div className="first flex w-[100%]  mb-[24px] ">
            <div className="text ml-[16px] text-[17px] text-[#fff] font-[700] leaing-[24px]">
              محبوب ترین های فیلیمو
            </div>
            <div className="btn w-[120px] h-[28px] bg-[black] rounded-[34px] border flex justify-center gap-[5px] border-solid border-[#ffffff1f] px-[1px] ">
              <button
                className="flex justify-center items-center w-[58px] px-[8px] text-[12px] text-[#fff] font-[700] rounded-[16px] leading-[24px] bg-[#ffffff]/[0.2]  "
                onClick={serial}
              >
                سریال
              </button>
              <button
                className="flex justify-center items-center w-[58px] px-[8px] text-[12px] text-[#fff] font-[700] rounded-[16px] leading-[24px] "
                onClick={movie}
              >
                فیلم
              </button>
            </div>
          </div>
          <div className="second w-[100%] h-[262px] flex justify-center overflow-x-auto ">
            <div className="pic w-[100%] h-[100%] pt-[15px] pb-[25px] flex justify-center gap-[40px] ">
              {test[flag_type - 1].list.map((item, index) => {
                return <Pics id={item.id} adres={item.adres} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="bottom w-[98%] h-[515px] relative bg-[green]">
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Best;
