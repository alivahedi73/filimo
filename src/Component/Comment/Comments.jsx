import icon from "../../../public/image/comment/icon.webp";
import qout from "../../../public/image/comment/qout.webp";


const Comments = () => {
 
  return (
    <>
      <div className="comments w-[33%] h-[189px] max-w-[424px] min-w-[359px] p-[24px] rounded-[12px] border-[1px] border-solid border-[#33353d] bg-[#1a1a1a] overflow-hidden">
        <div className="first flex justify-between mb-[16px]">
          <div className="right flex" >
            <img src={icon} alt="" className="w-[24px] h-[24px] ml-[8px]" />
            <div className="name text-[14px] text-[#959ba2]">mostafa</div>
          </div>
          <div className="left w-[40px] h-[40px] self-start " >
            <img src={qout} alt="" className="w-[40px] h-[40px]" />
          </div>
        </div>
        <div className="second text-[#f9f9f9] text-justify text-[11px] font-[400] leading-[18px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </div>
      </div>
    </>
  );
};

export default Comments;
