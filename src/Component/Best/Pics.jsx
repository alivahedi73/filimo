import logo from "../../../public/image/best/logo.svg";
const Pics = ({ adres, id }) => {
  return (
    <>
      <a
        href=""
        className="picturs flex w-[18%] h-[100%] max-w-[170px] min-w-[130px]  relative overflow-hidden  "
      >
        <div className="w-[100%] h-[100%]   rounded-[10px] border-solid border-[#ffffff]/[0.7]  overflow-hidden">
          <img
            id={id}
            src={adres}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <img
          src={logo}
          alt=""
          className="w-[94px] h-[13px] absolute bottom-2 right-[50%] translate-x-[50%] z-[10] "
        />
        <div className="cover w-[100%] h-[100%] border-[2px] border-solid border-[#ffffff]/[0.7] rounded-[10px] bg-gradient-to-t from-[black] from-2% via-[black]/[0.5] via-30% to-[black]/[0.1] absolute top-0"></div>
      </a>
    </>
  );
};

export default Pics;
