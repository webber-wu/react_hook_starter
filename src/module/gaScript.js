const gaSent = page => {
  // console.log(page);
  ga("set", "page", `${page}`);
  ga("send", "pageview");
};

const GA = props => {
  useEffect(() => {
    let {
      location: { pathname }
    } = props;
    let gaID = "UA-120811572-1"; // 本機測試專用 GA id ( port: 7777)

    const gaScript = document.createElement("script");
    document.body.appendChild(gaScript);
    gaScript.onload = () => {
      window.ga("create", gaID, "auto");
      gaSent(pathname);
    };
    gaScript.src = "https://www.google-analytics.com/analytics.js";

    if (window.ga !== undefined) {
      if (pathname !== props.location.pathname) {
        gaSent(pathname);
      }
    }
  }, [props]);
  return null;
};

export default compose(withRouter)(GA);
