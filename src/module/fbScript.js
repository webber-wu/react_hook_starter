import { useDispatch } from "redux-react-hook";
import { FBInitialized } from "../redux/action/rootAction";

const FBScript = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fbScript = document.createElement("script");
    document.body.appendChild(fbScript);

    let appId;
    if (process.env.NODE_ENV == "development") appId = "";
    if (process.env.NODE_ENV == "production") appId = "";

    fbScript.onload = () => {
      window.fbAsyncInit = function() {
        FB.init({
          appId: appId,
          cookie: true,
          xfbml: true,
          version: "v5.0"
        });
        window.fbInited = true;
        dispatch(FBInitialized());
        FB.AppEvents.logPageView();
      };
    };
    fbScript.src = "https://connect.facebook.net/en_US/sdk.js";
  }, []);

  return null;
};

export default FBScript;
