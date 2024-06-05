import Comments from "./Comments";
import btn from "../../../public/image/free/btn.svg";

const Comment = () => {
  let counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let btn_left = (e) => {
    let pos =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1];
    pos.scrollLeft = pos.scrollLeft - 400;
  };
  let btn_right = (e) => {
    let pos =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1];
    pos.scrollLeft = pos.scrollLeft + 400;
  };

  let start = (e) => {
    let pos = e.target.parentElement.parentElement.parentElement.parentElement;
    setInterval((e) => {
      pos.scrollLeft = pos.scrollLeft - 400;
    }, 3000);
  };

  return (
    <div className="w-[100%] h-[386px]  py-[64px] px-[65px] bg-[#151515] flex justify-center">
      <div className="w-[100%] h-[100%] max-w-[1400px]">
        <div className="titr w-[100%]  mb-[24px] flex justify-between ">
          <div className="text-[#dcdcdc] text-[17px] font-[700]">
            نظر کاربران بعد از تماشای فیلیمو
          </div>
          <div className="flex gap-[10px]">
            <div
              className="btn_right w-[40px] h-[40px] bg-[#06060699] rounded-[50%]  flex justify-center items-center "
              onClick={btn_right}
            >
              <img
                src={btn}
                alt=""
                className="w-[20px] h-[20px] rotate-180  "
              />
            </div>

            <div
              className="btn_left w-[40px] h-[40px] bg-[#06060699] rounded-[50%]  flex justify-center items-center "
              onClick={btn_left}
            >
              <img src={btn} alt="" className="w-[20px] h-[20px] " />
            </div>
          </div>
        </div>
        <div
          className="comment w-[100%] h-[196px] bg-[#151515] flex justify-start items-center gap-[20px] overflow-x-hidden scroll-smooth "
          onLoad={start}
        >
          {counter.map((item,index) => (
            <Comments key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
