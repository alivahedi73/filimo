import Pic from "./Pic";
import btn from "../../../public/image/free/btn.svg";

const Freecontent = () => {
  const data = [
    { fname: "پایتخت", pic: "./../../public/image/free/9.webp" },
    { fname: "عقرب", pic: "./../../public/image/free/8.webp" },
    { fname: "ملکه گدایان", pic: "./../../public/image/free/12.webp" },
    { fname: "ویرانگر", pic: "./../../public/image/free/7.webp" },
    { fname: "شاهرگ", pic: "./../../public/image/free/3.webp" },
    { fname: "بالش ها", pic: "./../../public/image/free/10.webp" },
    { fname: "حماسه دره شیلر", pic: "./../../public/image/free/4.webp" },
    { fname: "راز دشت تاران", pic: "./../../public/image/free/1.webp" },
    { fname: "چپ دست", pic: "./../../public/image/free/2.webp" },
    { fname: "شب های مافیا ۲", pic: "./../../public/image/free/14.webp" },
    { fname: "مردم معمولی", pic: "./../../public/image/free/15.webp" },
    { fname: "دیرین دیرین", pic: "./../../public/image/free/5.webp" },
    { fname: "سال های دور از خانه", pic: "./../../public/image/free/11.webp" },
    { fname: "دراکولا", pic: "./../../public/image/free/13.webp" },
    { fname: "زهر عسل", pic: "./../../public/image/free/6.webp" },
  ];

  let btn_left = (e) => {
    let pos = e.target.parentElement.parentElement.firstChild
    pos.scrollLeft = pos.scrollLeft - 250;
  };
  let btn_right = (e) => {
    let pos = e.target.parentElement.parentElement.firstChild
    pos.scrollLeft = pos.scrollLeft + 250;
  };

  return (
    <div className="w-[100%] h-[350px] py-[60px] px-[70px]  flex justify-center bg-[black] ">
      <div className="w-[90%] h-[229px]  max-w-[1200px] relative">
        <div
          className="box w-[100%] y-[inherit]  max-w-[1200px]  bg-[black] flex justify-start items-center gap-[30px] overflow-hidden scroll-smooth   "
         
        >
          {data.map((item, index) => {
            return <Pic fname={item.fname} pic={item.pic} key={index} />;
          })}
        </div>

        <div className="btn_left w-[40px] h-[40px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[-20px] flex justify-center items-center "  onClick={btn_left}>
          <img src={btn} alt="" className="w-[20px] h-[20px] " />
        </div>

        <div className="btn_right w-[40px] h-[40px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] right-[-20px] flex justify-center items-center "  onClick={btn_right}>
          <img src={btn} alt="" className="w-[20px] h-[20px] rotate-180  " />
        </div>
      </div>
    </div>
  );
};

export default Freecontent;
