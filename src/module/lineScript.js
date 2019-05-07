const LINEScript = () => {
  useEffect(() => {
    const lineScript = document.createElement("script");
    document.body.appendChild(lineScript);
    lineScript.onload = () => {
      LineIt.loadButton();
    };
    lineScript.src =
      "https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js";
  }, []);

  return null;
};

export default LINEScript;
