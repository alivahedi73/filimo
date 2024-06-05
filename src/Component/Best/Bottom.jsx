
import oscar from "../../../public/image/best/second/oscar.jpg";
import logo_osc from "../../../public/image/best/second/oscar_logo.webp";
import sample from "../../../public/image/best/second/sample.webp";
import lock from "../../../public/image/best/second/lock.webp";

import free from "../../../public/image/free.svg";

import btn from "../../../public/image/free/btn.svg";


const Bottom = () => {

    let btn_left = (e) => {
        let pos = e.target.parentElement.parentElement.firstChild
        pos.scrollLeft = pos.scrollLeft - 250;
      };
      let btn_right = (e) => {
        let pos = e.target.parentElement.parentElement.firstChild
        pos.scrollLeft = pos.scrollLeft + 250;
      };

  return (
    <>
      <img src={oscar} alt="" className="w-[100%] h-[100%] object-top" />
      <div className="detail absolute top-4 right-8 z-[2] ">
        <a
          href=""
          className="oscar block text-[16px] text-[white] leading-[32px] font-[700] mb-[40px]"
        >
          اسکار
        </a>

        <div className="text-[10px] text-[#a1a1a1] leading-[12px] font-[100] mb-[24px]">
          کارگردان : مهران مدیری
        </div>

        <div className="flex gap-[10px]">
          <span className="bg-[#282828] py-[3px] px-[10px] text-[11px] text-[white] rounded-[16px] font-[400] ">
            ریلیتی شو
          </span>{" "}
          <span className="bg-[#282828] py-[3px] px-[10px] text-[11px] text-[white] rounded-[16px] font-[400] ">
            گیم شو
          </span>
        </div>
        <div className="text-[12px] text-[white] leading-[26px] font-[100] mt-[24px]">
          تنها یک تلاش دیگر تا مشخص‌شدن برنده اسکار باقیمانده است. در سومین
          قسمت، صحرا اسداللهی، به کمک جلوه‌های ویژه روبروی
        </div>
      </div>
      <img
        src={logo_osc}
        alt=""
        className="block w-[220px] h-[100px] absolute top-[5px] left-[50px] z-[2]"
      />
      <div className="cover bg-[black]/[0.4] w-[100%] h-[100%] absolute top-0 right-0"></div>

      <div className="slider flex justify-center items-center gap-[20px] w-[100%] h-[200px] absolute bottom-20">
        <div className="relative w-[95%] h-[100%] flex justify-start gap-[20px]  overflow-x-hidden ">
          <div className="clear w-[20%] min-w-[114px] max-w-[307px] h-[200px] overflow-hidden">
            <a href="" className="block w-[100%] h-[100%] ">
              <div className="w-[100%] h-[170px] relative">
                <img
                  src={sample}
                  alt=""
                  className="w-[100%] h-[100%] object-cover block rounded-[5px] "
                />
                <div className="rounded-[8px] bg-[black] w-[fit] px-[8px] py-[4px] text-[#e3e3e3] font-[400] text-[10px] absolute bottom-1 left-1">
                  1:05:55
                </div>
                <div className="green flex justify-center items-center h-[25px] w-[63px] px-[8px] py-[4px] text-[#19894a] text-[10px] font-[400] rounded-[24px] bg-[#1d2b1f] absolute bottom-[5px] right-[1px]">
                  <img
                    src={free}
                    alt=""
                    className="block w-[16px] h-[16px] ml-[4px]"
                  />
                  رایگان
                </div>
              </div>
              <div className="text-[11px] text-[#f6f6f6] font-[700] mt-[5px]">
                فصل ۱ قسمت ۱
              </div>
            </a>
          </div>
          <div className="lock w-[20%] min-w-[114px] max-w-[307px] h-[200px] overflow-hidden">
            <a href="" className="block w-[100%] h-[100%] ">
              <div className="flex justify-center items-center w-[100%] h-[170px] bg-[black]/[0.7]">
                <div className="circle flex justify-center items-center w-[48px] h-[48px] rounded-[50%] bg-[black]">
                  <img src={lock} alt="" className="block w-[24px] h-[24px]" />
                </div>
              </div>

              <div className="text-[11px] text-[#f6f6f6] font-[700] mt-[5px]">
                فصل ۱ قسمت ۲
              </div>
            </a>
          </div>

          <div
            className="btn_left w-[30px] h-[30px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[0] flex justify-center items-center opacity-[0.5]  "
            onClick={btn_left}
          >
            <img src={btn} alt="" className="w-[16px] h-[13px] " />
          </div>

          <div
            className="btn_right w-[30px] h-[30px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0]  flex justify-center items-center opacyty-[0.5] z- "
            onClick={btn_right}
          >
            <img src={btn} alt="" className="w-[16px] h-[13px] rotate-180  " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
