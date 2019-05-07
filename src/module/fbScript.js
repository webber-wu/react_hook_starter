function FBScript() {
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
          autoLogAppEvents: true,
          xfbml: true,
          version: "v2.11"
        });
        window.fbInited = true;
      };
    };
    fbScript.src = "https://connect.facebook.net/en_US/sdk.js";
    return () => {};
  }, []);

  return null;
}

export default FBScript;
