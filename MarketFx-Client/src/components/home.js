import { NavLink } from "react-router-dom";
import Box from "../../box";

const Home = () => {
  return (
    <div>
      <div className="d-flex flex-row align-content-center justify-content-between my-1">
        <Box Title="Oil" Price="1232" Cateory="Bearish" />
        <Box Title="Oil" Price="1232" Cateory="Bearish" />
        <Box Title="Oil" Price="1232" Cateory="Bearish" />
        <Box Title="Oil" Price="1232" Cateory="Bearish" />
        <Box Title="Oil" Price="1232" Cateory="Bearish" />
      </div>
      <div>
        <nav className="navigation">
          <ul
            className="d-flex flex-row justify-content-evenly align-items-center bg-primary text-white p-2"
            style={{
              textDecoration: "none",
              listStyle: "none",
              alignContent: "center",
            }}
          >
            <li>Market News</li>
            <li>Market Data</li>
            <li>Calenders</li>
            <li>About Us</li>
            <li
              style={{
                background: "lightblue",
                color: "black",
                fontWeight: "bold",
                borderRadius: 10,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 5,
                paddingBottom: 5,
              }}
            >
              Login
            </li>
          </ul>
        </nav>
        <div>
          <a href="#" style={{ textDecoration: "none", flexWrap: "wrap" }}>
            <div className="d-flex align-items-center pt-3 pb-2 px-4 py-md-2 text-uppercase">
              <span className="font-weight-bold dfx-text-spaced text-black dfx-font-size-3 word-break-keep-all">
                News{" "}
              </span>
            </div>
            <ul
              className="py-sm-0 px-4 m-1 d-flex w-200 position-relative text-dark"
              style={{ listStyle: "none" }}
            >
              <li class=" dfx-font-size-3 " />
              <span className="me-3 ">
                Australian Dollar just slightly higher after the #RBA rate
                hike.The central bank continued to build the case for further
                tighteni...
              </span>
              <li class=" dfx-font-size-3" />
              <span className=" me-3">
                Australian Dollar just slightly higher after the #RBA rate
                hike.The central bank continued to build the case for further
                tighteni...
              </span>
              <li class=" dfx-font-size-3" />
              <span className="me-3">
                Australian Dollar just slightly higher after the #RBA rate
                hike.The central bank continued to build the case for further
                tighteni...
              </span>
              <li class=" dfx-font-size-3" />
              <span className=" me-3">
                Australian Dollar just slightly higher after the #RBA rate
                hike.The central bank continued to build the case for further
                tighteni...
              </span>
            </ul>
          </a>
        </div>
        <div>
          <div
            className=" text-white h-100 p-4 w-50 mt-3"
            style={{
              backgroundImage: `url("https://a.c-dn.net/b/2iLBW3/oil-pumps-on-cloud-sky.jpg")`,
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundSize: "cover",
              margin: 20,
            }}
          >
            <div
              style={{
                zIndex: 4,
                color:"#ffffff",
              }}
            >
              <p className="w-100 mb-2  dfx-font-size-5 font-weight-bold ">
                Crude Oil Ponders Course as Markets Fear the Return of the Fed.
                Lower WTI?
              </p>
              <p className=" dfx-font-size-3">Dec 6, 2022 11:00 AM +05:00</p>
              <p className=" mb-0">
                The Euro backed away from parity again after the US Dollar
                ascendency got back on track after the Federal Reserve got its
                message across loud and clear. Where to for EUR/USD?
              </p>
            </div>
            <div
              style={{
                content: " ",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "#000000",
                opacity: 0.3,
                zIndex:0,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
