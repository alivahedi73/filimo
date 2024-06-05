import image from "../../../public/image/doll/two.webp";
const Doll = () => {
  return (
    <div className="w-[100%] h-[auto] bg-[black]  pt-[42px] flex justify-center ">
      <div className="w-[inherit] h-[inherit] flex justify-center gap-[50px] px-[100px]">
        <div className="right max-w-[47%]  w-[432px]   ">
          <img src={image} alt="" className="w-[inherit] h-[inherit]" />
        </div>

        <div className="left flex flex-col justify-center">

            <div className="pb-[32px] text-[20px] font-[400] text-[white] leading-[35px]  ">
            دنیایی متنوع از فیلم و کارتون‌های کودکانه
            </div>
            <div className="pb-[36px] text-[13px] text-[white]/[0.5] font-[100] leading-[20px] max-w-[400px] text-justify"> 
            ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
            </div>

            <div className="pb-[60px]">
                <a href="" className="w-[120px] h-[38px] ml-[10px] py-[10px] px-[16px] bg-[white] text-[11px] font-[700] text-[#151515] rounded-[8px] hover:bg-[#D6D6D7] transition-all duration-300 ease-in-out">فیلیمو کودک بساز</a>
                <a href="" className="w-[120px] h-[38px] ml-[10px] py-[10px] px-[16px] bg-[white] text-[11px] font-[700] text-[#151515] rounded-[8px] hover:bg-[#D6D6D7] transition-all duration-300 ease-in-out"> تماشای فیلیمو کودک </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Doll;
