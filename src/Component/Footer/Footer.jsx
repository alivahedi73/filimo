import image from "../../../public/image/footer/logo.webp";
import green from "../../../public/image/footer/green.svg";
import buy from "../../../public/image/menu/buy.svg";

const Footer = () => {
  return (
 
    <div className="w-[100%] bg-[black] flex justify-center">
   <div className="w-[100%] bg-[black] max-w-[1400px]">
      <div className="w-[inherit] h-[auto] bg-[#0d1812] py-[64px] flex flex-col items-center">
        <div className="logo flex justify-center pb-[64px]">
          <img src={image} alt="" />
        </div>
        <div className="option flex justify-center gap-[30px] mb-[40px]">
          <div className="first flex gap-[8px]">
            <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center mt-[3px]">
              <img src={green} alt="" className="w-[13px] h-[13px]" />
            </div>
            <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
              هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
            </div>
          </div>
          <div className="second flex gap-[8px]">
            <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center mt-[3px]">
              <img src={green} alt="" className="w-[13px] h-[13px]" />
            </div>
            <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
              هزاران انیمیشن و کارتون برای کودکان
            </div>
          </div>
          <div className="third flex gap-[8px]">
            <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center mt-[3px]">
              <img src={green} alt="" className="w-[13px] h-[13px]" />
            </div>
            <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
              پشتیبانی 24 ساعته برای راهنمایی شما
            </div>
          </div>
        </div>
        <a
          href=""
          className=" flex justify-center items-center gap-[7px] w-[285px] h-[58px]  py-[17px]  box-border   bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] transition-all duration-300 ease-in-out"
        >
          <img src={buy} alt="" className="w-[24px] h-[24px]" />

          <span className="text-[white] text-[15px] font-[500]">
            خرید اشتراک و تماشا{" "}
          </span>
        </a>
      </div>
    </div>
      
    </div>
  );
};

export default Footer;
