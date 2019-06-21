import "indexUI.css";
import { useMappedState, useDispatch } from "redux-react-hook";
import { increment } from "../redux/action/uiAction";

function IndexUI(props) {
  // useState(0) 0 為 counter state 預設值
  const [counter, setCounter] = useState(0);

  // redux use
  const reduxCounter = useMappedState(state => state.ui.counter);
  const dispatch = useDispatch();

  // use effect hook
  useEffect(() => {
    // 原 componentDidMount
    // setCounter(counter => 10);
    return () => {
      // 原 componentWillUnmount
      // setCounter(counter => 0);
    };
  }, []); // [] 參數為判斷 props 有沒有改變

  const addCounter = () => {
    // redux action
    dispatch(increment(reduxCounter + 1));

    // react hook
    // setCounter(counter + 1);
  };

  return (
    <>
      <h1>
        Hello, {props.name}
        {reduxCounter} times
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
      </h1>
      <button onClick={addCounter} type="button">
        INCREMENT
      </button>
    </>
  );
}

export default IndexUI;
