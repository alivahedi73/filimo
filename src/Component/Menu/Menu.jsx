import logo from "../../../public/image/menu/logo.svg";
import fire from "../../../public/image/menu/fire.svg";
import logo_2 from "../../../public/image/menu/logo-2.svg";

import buy from "../../../public/image/menu/buy.svg";

import search from "../../../public/image/menu/search.svg";

const Menu = () => {
  return (
    <div className="flex justify-center w-[100%] h-[52px] bg-[#040404]">
      <div className="flex justify-center  w-[100%] h-[52px] bg-[#040404] max-w-[1400px]">
        <div className="flex justify-around items-center w-[90%] h-[inherit] gap-[10px] ">
          <ul className="flex justify-start items-center w-[75%] h-[inherit] ">
            <li className="flex gap-[5px] w-[112px] h-[24px]">
              <a className="w-[inherit] h-[inherit] " href="">
                <img className="w-[79px] h-[24px]" src={logo} alt="" />
              </a>
              <div className="w-[1px] h-[inherit] bg-[#505050] "></div>
            </li>

            <li className="w-[90px] h-[52px] mr-[10px]">
              <a
                className="flex items-center w-[inherrit] h-[52px] py-[14px] text-[11px] font-[400] text-[white] hover:text-[#f9ad03] transition-all duration-300 ease-in-out "
                href=""
              >
                <img
                  className="w-[24px] h-[24px] 
                    "
                  src={fire}
                  alt=""
                />
                فیلیموتور
              </a>
            </li>
            <li className=" w-[134px] h-[31px] rounded-[50px] bg-[#423313] hover:bg-[#7e5d22] transition-all duration-300 ease-in-out ">
              <a
                href=""
                className="flex justify-center items-center gap-[3px] w-[inherit] h-[inherit] font-[500] text-[11px] text-[#f5b83f] "
              >
                <img src={logo_2} alt="" className="" />
                مدرسه
                <span className="text-[8px] font-[500] text-[black] bg-[white] py-[2px] px-[4px] rounded-[1000px]">
                  ویژه امتحانات
                </span>
              </a>
            </li>

            <li className="w-[70px] h-[46px] flex justify-center items-center mr-[20px]">
              <a
                href=""
                className="w-[59px] h-inherit] py-[14px] flex justify-center items-center gap-[3px] text-[11px] font-[400] text-[white] hover:text-[#f9ad03] transition-all duration-300 ease-in-out"
              >
                <img src={search} alt="" className="w-[18px] h-[18px]" />
                جستجو
              </a>
            </li>
          </ul>

          <div className="w-[23%] h-[38px] flex justify-end items-center gap-[15px]">
            <div className="w-[118px] h-[42px]  flex justify-center items-center ">
              <a
                href=""
                className=" flex justify-center items-center gap-[4px] w-[inherit] h-[inherit] py-[16px] px-[10px] box-border   bg-[#1cb561] rounded-[4px] hover:bg-[#17924e] transition-all duration-300 ease-in-out"
              >
                <img src={buy} alt="" className="w-[17px] h-[17px]" />

                <span className="text-[white] text-[12px] font-[500]">
                  خرید اشتراک
                </span>
              </a>
            </div>

            <div className="w-[54px] h-[42px]">
              <a
                href=""
                className=" w-[inherit] h-[inherit] flex justify-center items-center bg-[#363636] text-[white] text-[12px] font-[500] py-[16px] px-[10px] box-border rounded-[4px] hover:bg-[#444444]"
              >
                {" "}
                ورود
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
