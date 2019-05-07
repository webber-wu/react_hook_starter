import "indexUI.css";

function IndexUI(props) {
  const [counter, setCounter] = useState(0); // useState(0) 0 為 counter state 預設值

  useEffect(() => {
    // 原 componentDidMount
    // setCounter(counter => 10);
    return () => {
      // 原 componentWillUnmount
      // setCounter(counter => 0);
    };
  }, []); // [] 參數為判斷 props 有沒有改變

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <h1 onClick={addCounter}>
      Hello, {props.name}
      {counter} times
      <p>
        <NavLink to="/about">About</NavLink>
      </p>
    </h1>
  );
}

export default IndexUI;
