import { initGA, logPageView } from "analytics";
import { useDispatch } from "redux-react-hook";
import { GAInitialized } from "../redux/action/rootAction";

const ReactGA = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      dispatch(GAInitialized());
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return null;
};

export default ReactGA;
