import ReactGA from "react-ga";

export const initGA = () => {
  // console.log("GA init");
  const pro = ""; // 正式機 GA ID
  const dev = "UA-154722019-1"; // 開發測試用 3000 port
  const gaID = process.env.DEMO === "demo" ? pro : dev;
  ReactGA.initialize(gaID);
};

export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
