import plus from "../../../public/image/accordion/plus.svg";
const Item = ({ name }) => {
  const show = (e) => {
    let data = [...e.target.parentElement.classList];
    if (data.includes("h-[53px]")) {
      e.target.parentElement.classList.remove("h-[53px]");
      e.target.children[1].classList.remove("rotate-45");
      e.target.parentElement.classList.add("h-[auto]");
      e.target.children[1].classList.add("rotate-0");
    } else {
      e.target.parentElement.classList.add("h-[53px]");
      e.target.children[1].classList.add("rotate-45");
      e.target.parentElement.classList.remove("h-[auto]");
      e.target.children[1].classList.remove("rotate-0");
    }
  };
  return (
    <>
      <div className="parent w-[100%] h-[53px]  rounded-[12px] border-[1px] border-solid border-[#555555] bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-in-out mb-[15px] ">
        <div
          className="titr w-[100%] h-[53px] p-[16px]  flex items-center justify-between cursor-pointer "
          onClick={show}
        >
          <div className="text text-[#dcdcdc]  text-[16px] font-[500]  ">{name} 
          </div>
          <div className="img w-[14px] h-[14px] mr-[30px] rotate-45 ">
            <img src={plus} alt="" className="w-[14px] h-[14px] " />
          </div>
        </div>
        <div className="answer text-[#dcdcdc] p-[16px]  text-[14px] font-[400] text-justify leading-[23px] ">
          بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
          فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
          هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
          هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر
          می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از
          طریق اپلیکیشن را تماشا کنید.
        </div>
      </div>
    </>
  );
};

export default Item;
