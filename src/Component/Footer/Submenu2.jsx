import aparat from "../../../public/image/footer/aparat.svg";
import telegram from "../../../public/image/footer/telegram.svg";
import twiter from "../../../public/image/footer/twiter.svg";
import insta from "../../../public/image/footer/insta.svg";

const Submenue2 = () => {
  return (
    <div className="submenu w-[185px] h-[200px] absolute bottom-[0px]">
      <div className="submenu w-[185px] h-[auto] bg-[black] absolute bottom-[50px] ">
        <a
          href=""
          className=" w-[inherit] h-[auto] py-[8px] px-[8px]  text-[white]/[0.5] text-[13px] font-[400] flex  justify-start items-center hover:bg-[#474747] hover:text-[white] transition-all duration-300 ease-in-out "
        >
          <img src={aparat} alt="" className="w-[24px] h-[24px] ml-[8px]" />
          آپارات{" "}
        </a>
        <a
          href=""
          className="w-[inherit] h-[auto] py-[8px] px-[8px]  text-[white]/[0.5] text-[13px] font-[400] flex  justify-start items-center hover:bg-[#474747] hover:text-[white] transition-all duration-300 ease-in-out "
        >
          <img src={telegram} alt="" className="w-[24px] h-[24px] ml-[8px]" />
          تلگرام{" "}
        </a>{" "}
        <a
          href=""
          className="w-[inherit] h-[auto] py-[8px] px-[8px]  text-[white]/[0.5] text-[13px] font-[400] flex  justify-start items-center hover:bg-[#474747] hover:text-[white] transition-all duration-300 ease-in-out "
        >
          <img src={twiter} alt="" className="w-[24px] h-[24px] ml-[8px]" />
          توئیتر{" "}
        </a>{" "}
        <a
          href=""
          className="w-[inherit] h-[auto] py-[8px] px-[8px]  text-[white]/[0.6] text-[13px] font-[400] flex  justify-start items-center hover:bg-[#474747] hover:text-[white] transition-all duration-300 ease-in-out "
        >
          <img src={insta} alt="" className="w-[24px] h-[24px] ml-[8px]" />
          اینستاگرام{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default Submenue2;
