import pc from "../../../public/image/footer/pc.svg";
import down from "../../../public/image/footer/down.svg";
import Submenu1 from "./Submenu1";
import Submenu2 from "./Submenu2";
const End = () => {
  return (
    <div className="w-[100%] h-[38px] bg-[black] fixed bottom-0 right-0 flex justify-center z-[999999]">
      <div className="max-w-[1400px] w-[100%] h-[inherit] bg-[black] flex justify-between">
        <div className=" right w-[50%] h-[inherit] flex justify-start items-center">
          <div className="flex gap-[3px] h-[inherit] w-fit  align-center ">
            <a
              href=""
              className=" h-[inherit] w-fit text-[white]/[0.5] text-[14px] font-[400] flex gap-[4px] justify-center items-center px-[8px] py-[4px] hover:text-[white] transition-all duration-300 ease-in-out"
            >
              <img src={pc} alt="" className="w-[18px] h-[18px] ml-[4px]" />
              تماشا با تلویزیون
            </a>
          </div>

          <div className="flex  h-[inherit] w-fit  align-center ">
            <a
              href=""
              className=" h-[inherit] w-fit text-[white]/[0.5] text-[14px] font-[400] flex gap-[4px] justify-center items-center px-[8px] py-[4px] hover:text-[white] transition-all duration-300 ease-in-out"
            >
              اپلیکیشن ها{" "}
            </a>
          </div>
          <div className="flex  h-[inherit] w-fit  align-center ">
            <a
              href=""
              className=" h-[inherit] w-fit text-[white]/[0.5] text-[14px] font-[400] flex gap-[4px] justify-center items-center px-[8px] py-[4px] hover:text-[white] transition-all duration-300 ease-in-out"
            >
              تماس و پشتیبانی{" "}
            </a>
          </div>
          <div className="flex  h-[inherit] w-fit  align-center ">
            <a
              href=""
              className=" h-[inherit] w-fit text-[white]/[0.5] text-[14px] font-[400] flex gap-[4px] justify-center items-center px-[8px] py-[4px] hover:text-[white] transition-all duration-300 ease-in-out"
            >
              فروشگاه{" "}
            </a>
          </div>
          <div className="flex  h-[inherit] w-fit  align-center relative overflow-hidden hover:overflow-visible ">
            <a
              href=""
              className=" h-[inherit] w-fit text-[white]/[0.5] text-[13px] font-[400] flex  justify-center items-center px-[8px] py-[2px] hover:text-[white] transition-all duration-300 ease-in-out"
            >
              <img src={down} alt="" className="w-[18px] h-[18px] ml-[1px]" />
              سایر لینک ها{" "}
            </a>
            <Submenu1/>
   
          </div>
        </div>
        <div className=" left flex  h-[inherit] w-fit  align-center ml-[3px] relative overflow-hidden hover:overflow-visible">
          <a
            href=""
            className=" h-[inherit] w-fit text-[white]/[0.5] text-[13px] font-[400] flex gap-[2px] justify-center items-center px-[8px] py-[2px] hover:text-[white] transition-all duration-300 ease-in-out"
          >
            <img src={down} alt="" className="w-[18px] h-[18px] ml-[1px]" />
            شبکه های اجتماعی{" "}
          </a>
          <Submenu2/>
        </div>
      </div>
    </div>
  );
};

export default End;
