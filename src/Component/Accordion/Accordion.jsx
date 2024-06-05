import Item from "./Item";

const Accordion = () => {
  const data = [
    { id: 1, text: "آیا می توانیم فیلم های موجود در فیلیمو را دانلود کنیم ؟" },
    { id: 2, text: "آیا فیلیمو برای خارج از ایران در دسترس است ؟" },
    { id: 3, text: "آیا برای تماشای فیلم های اکران آنلاین، باید اشتراک بخرم ؟" },
    { id: 4, text: "از کجا می توانم نرم افزار اندروید یا ios  را دانلود کنم ؟" },
  ];
  return (
    <div className="w-[100%] h-[568px] bg-[#292929] flex justify-center ">
      <div className="w-[100%] h-[768px] py-[80px] max-w-[1400px] bg-[#292929] flex justify-center ">
        <div className="w-[94%] h-[100%] px-[20px]  flex flex-col items-center">
          <h2 className="text-[16px] font-[400] text-[white] ">
            سوالات متداول
          </h2>
          <div className="mt-[10px] mb-[32px] text-[12px] font-[400] text-[#9e9e9e]">
            سوال شایع دیگر کاربران شاید برای شما پیش امده باشد
          </div>
          <div className="w-[80%] h-[auto]">
            {
              data.map((item,index)=>{
                return(
                  <Item name={item.text} key={index} />
                )
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
