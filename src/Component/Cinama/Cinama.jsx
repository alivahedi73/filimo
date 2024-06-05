import green from "../../../public/image/footer/green.svg";
import s from "../../../public/image/cinama/1.webp";
import ticket from "../../../public/image/cinama/ticket.webp";
import Info from "./Info";

const Cinama = () => {
  return (
    <div className="w-[100%] h-[auto] bg-[url(../../../public/image/cinama/background.webp)] flex justify-center ">
      <div className="w-[100%] h-[auto] max-w-[1400px] flex justify-center ">
        <div className="w-[85%] h-[auto] py-[64px]  ">
          <div className="titr w-[100%] h-[auto]  flex flex-col items-center mb-[20px] ">
            <div className="w-fit h-[auto] mb-[32px] font-[700] text-[17px] leading-[20px] text-[white] ">
              سینما آنلاین فیلیمو
            </div>
            <div className="w-[100%] h-[auto] flex justify-center gap-[60px] mb-[16px]">
              <div className="first flex gap-[8px]">
                <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                  <img src={green} alt="" className="w-[13px] h-[13px]" />
                </div>
                <div className="text-[white]/[0.75] text-[13px] font-[100] leading-[25px]">
                  فیلم‌های روز سینمای ایران{" "}
                </div>
              </div>
              <div className="second flex gap-[8px]">
                <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                  <img src={green} alt="" className="w-[13px] h-[13px]" />
                </div>
                <div className="text-[white]/[0.75] text-[13px] font-[100] leading-[25px]">
                  ۸ ساعت زمان برای مشاهده فیلم در هر کجا
                </div>
              </div>
              <div className="third flex gap-[8px]">
                <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                  <img src={green} alt="" className="w-[13px] h-[13px]" />
                </div>
                <div className="text-[white]/[0.75] text-[13px] font-[100] leading-[25px]">
                  خرید یک بلیت برای تماشا همراه با همه خانواده
                </div>
              </div>
            </div>
          </div>

          <div className="kadr w-[100%] h-[530px]   overflow-y-auto flex flex-wrap justify-center gap-[30px] px-[10px] mt-[15px]">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinama;
