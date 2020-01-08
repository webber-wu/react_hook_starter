import "indexUI.css";
import { useMappedState, useDispatch } from "redux-react-hook";

function IndexUI(props) {
  // const [counter, setCounter] = useState(0);
  // const reduxCounter = useMappedState(state => state.ui.counter);
  // const dispatch = useDispatch();

  // use effect hook
  useEffect(() => {
    // 原 componentDidMount
    return () => {
      // 原 componentWillUnmount
    };
  }, []); // [] 參數為判斷 props 有沒有改變

  return (
    <>
      <NavLink to="/about">About</NavLink>
    </>
  );
}

export default IndexUI;
