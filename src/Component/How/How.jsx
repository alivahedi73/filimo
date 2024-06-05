import image from "../../../public/image/how/one.webp";
import tv from "../../../public/image/how/TV.webp";
import android from "../../../public/image/how/androidTV.webp";
import point from "../../../public/image/how/point.svg";
const How = () => {
  return (
    <div className=" w-[100%] h-[512px] bg-[#151515] flex justify-end relative">
      <div className="right w-[554px] h-[385px] absolute right-[100px] top-[30px]">
        <div className="font-[700] text-[16px] text-[white] mb-[25px]">
          چطور با تلویزیون، فیلیمو تماشا کنم؟
        </div>

        <div className="font-[100] text-[11px] text-[#d8d8d8] leading-[32px] mb-[32px] text-justify max-w-[400px]">
          ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
          فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از
          لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را
          انتخاب کنید.
        </div>
        <div className=" tv flex gap-[10px] mb-[32px]">
          <div className="w-[27px] h-[18px]">
            <img src={tv} alt="" className="w-[27px] h-[18px]" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="font-[700] text-[14px] text-[#d8d8d8] leading-[15px]">
              تلویزیون{" "}
            </div>
            <div className="font-[400] text-[11px] text-[#a1a1a1] leading-[14px]">
              Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
              devices - Samsung
            </div>
          </div>
        </div>
        <div className=" android flex gap-[10px] mb-[64px]">
          <div className="w-[21px] h-[25px]">
            <img src={android} alt="" className="w-[21px] h-[25px]" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="font-[700] text-[14px] text-[#d8d8d8] leading-[15px]">
              {" "}
              اندروید تی‌وی{" "}
            </div>
            <div className="font-[400] text-[11px] text-[#a1a1a1] leading-[14px]">
              NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic -
              humax - matricom
            </div>
          </div>
        </div>

        <a
          href=""
          className=" flex justify-center items-center gap-[4px] w-[243px] h-[38px]  py-[10px] px-[10px] box-border   bg-[#606060] rounded-[8px] hover:bg-[#737373] transition-all duration-300 ease-in-out"
        >
          <span className="text-[white] text-[12px] font-[500]">
            ویدیوهای آموزشی تماشا با تلویزیون{" "}
          </span>
          <img src={point} alt="" className="w-[18px] h-[18px]" />
        </a>
      </div>
      <div className=" left  w-[785px] h-[480px] py-[10px]">
        <img src={image} alt="" className="w-[785px] h-[480px]" />
      </div>


    </div>
  );
};

export default How;
