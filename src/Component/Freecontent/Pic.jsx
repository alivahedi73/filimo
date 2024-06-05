import free from "../../../public/image/free.svg";
const Pic = ({fname,pic}) => {
  return (
    <div className="w-[152px] h-[229px] relative ">
      <a href="" className="w-[inherit] h-[inherit] ">
        <div className="w-[152px] h-[202px] rounded-[10px] overflow-hidden">
          <img src={pic} alt="" className="w-[100%] h-[100%] opacity-[0.75] " />
        </div>
        <div className="flex justify-start text-[11px] text-[white] font-[200] pr-[7px] mt-[8px]">
          {fname}
        </div>

        <div className="green flex justify-center items-center h-[25px] w-[63px] px-[8px] py-[4px] text-[#19894a] text-[10px] font-[400] rounded-[24px] bg-[#1d2b1f] absolute top-[5px] right-[5px]">
          <img src={free} alt="" className="block w-[16px] h-[16px] ml-[4px]" />
          رایگان
        </div>
      </a>
    </div>
  );
};

export default Pic;
