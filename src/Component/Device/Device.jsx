import image from "../.././../public/image/device/three.webp";
import laptop from "../../../public/image/device/laptop.webp"
import mobile from "../../../public/image/device/mobile.webp"
import game from "../../../public/image/device/game.webp"
import buy from "../../../public/image/menu/buy.svg"


const Device = () => {
  return (

    <div className="w-[100%] h-[512px] bg-[#151515] flex justify-center">
  <div className="flex gap-[40px] w-[100%] h-[512px] bg-[#151515] py-[64px] px-[100px] max-w-[1400px]">
      <div className=" right w-[485px] h-[365px] py-[10px]">
        <img src={image} alt="" className="w-[485px] h-[365px]" />
      </div>

      <div className="left w-[554px] h-[385px]">
        <div className="font-[700] text-[16px] text-[white] mb-[16px]">
          تماشای فیلمو با همه دستگاه ها
        </div>
        <div className="font-[100] text-[13px] text-[#d8d8d8] leading-[25px] mb-[32px]">
        می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.

        </div>
        <div className=" laptop flex gap-[10px] mb-[32px]">
            <div className="w-[27px] h-[18px]">
                <img src={laptop} alt="" className="w-[27px] h-[18px]" />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="font-[700] text-[14px] text-[#d8d8d8] leading-[15px]">کامپیوتر و لپ‌تاپ</div>
                <div className="font-[400] text-[11px] text-[#a1a1a1] leading-[14px]" >windows PC - MacOS - Chorom OS</div>
            </div>
        </div>
        <div className=" mobile flex gap-[10px] mb-[32px]">
            <div className="w-[21px] h-[25px]">
                <img src={mobile} alt="" className="w-[21px] h-[25px]" />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="font-[700] text-[14px] text-[#d8d8d8] leading-[15px]"> موبایل و تبلت </div>
                <div className="font-[400] text-[11px] text-[#a1a1a1] leading-[14px]" >Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</div>
            </div>
        </div>
        <div className=" game flex gap-[10px] mb-[32px]">
            <div className="w-[27px] h-[18px]">
                <img src={game} alt="" className="w-[27px] h-[18px]" />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="font-[700] text-[14px] text-[#d8d8d8] leading-[15px]">  کنسول‌های بازی (Browser) </div>
                <div className="font-[400] text-[11px] text-[#a1a1a1] leading-[14px]" >Xbox Series S - Xbox Seris X - PS5 - PS4</div>
            </div>
        </div>
        <a
                href=""
                className=" flex justify-center items-center gap-[4px] w-[160px] h-[38px]  py-[16px] px-[10px] box-border   bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] transition-all duration-300 ease-in-out"
              >
                <img src={buy} alt="" className="w-[17px] h-[17px]" />

                <span className="text-[white] text-[12px] font-[500]">
                خرید اشتراک و تماشا                </span>
              </a>
      </div>
    </div>

    </div>
  
  );
};

export default Device;
