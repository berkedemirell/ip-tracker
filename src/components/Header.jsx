import arrow from "/src/images/icon-arrow.svg";
/* eslint react/prop-types: 0 */

export const Header = (props) => {
  return (
    <div className="w-full bg-desktopBack font-ruby flex flex-col items-center justify-center relative pb-14">
      <div className="flex flex-col items-center justify-center w-full p-10 csm:p-4">
        <h1 className="text-2xl text-slate-100 font-semibold">
          IP Address Tracker
        </h1>
        <div className="mt-4 flex flex-row rounded-lg">
          <input
            type="text"
            className="w-30r h-12 rounded-lg rounded-r-none p-2 csm:w-15r xsm:w-10r"
            placeholder="Search for any IP address or domain"
            onChange={props.handleChange}
          />
          <button
            onClick={props.handleSubmit}
            className="bg-slate-950 w-12 h-12 flex items-center justify-center rounded-r-xl hover:bg-slate-900 active:bg-slate-950"
          >
            <img src={arrow} className="w-4" alt="" />
          </button>
        </div>
      </div>
      <div className="absolute top-44  z-10 csm:pl-4 csm:pr-4 csm:absolute csm:top-32">
        <div className="flex flex-row csm:flex-col bg-slate-50 text-slate-950 justify-start w-70r items-start h-fit gap-12 cmd:gap-4 p-2 pl-12 pr-12 rounded-lg clg:w-fit csm:gap-2 csm:items-center">
          <div className="csm:text-center">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold csm:font-normal">
              IP address
            </span>
            <h3 className="text-2xl font-semibold clg:text-xl cmd:text-lg csm:text-sm">
              {props.data?.ip}
            </h3>
          </div>
          <div className="border-r-2 border-slate-200 h-20 flex items-center justify-center text-center csm:hidden"></div>
          <div className="csm:text-center">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold csm:font-normal">
              Location
            </span>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold clg:text-xl cmd:text-lg csm:text-sm">
                {props.data?.location?.city}, {props.data?.location?.country}
              </h3>
              <h3 className="text-2xl font-semibold clg:text-xl cmd:text-lg csm:text-sm">
                {props.data?.as?.asn}
              </h3>
            </div>
          </div>
          <div className="border-r-2 border-slate-200 h-20 flex items-center justify-center text-center csm:hidden"></div>
          <div className="csm:text-center">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold csm:font-normal">
              Timezone
            </span>
            <h3 className="text-2xl font-semibold clg:text-xl csm:text-sm">
              UTC{props.data?.location?.timezone}
            </h3>
          </div>
          <div className="border-r-2 border-slate-200 h-20 flex items-center justify-center text-center csm:hidden"></div>
          <div className="flex flex-col csm:items-center">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold csm:font-normal">
              isp
            </span>
            <h3 className="text-2xl font-semibold clg:text-xl cmd:text-lg cmd:w-28 csm:w-fit csm:text-sm csm:text-center">
              {props.data?.isp}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
