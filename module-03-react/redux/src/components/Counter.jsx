import { useDispatch, useSelector } from "react-redux";
import { COUNT_INCRESE, COUNT_DECRESE } from "../utils/action_type";
const Counter = () => {
  const count = useSelector((state) => state.count.count);
  console.log(count);
  const dispatch = useDispatch();
  console.log(count);

  function increment() {
    const action = {
      type: COUNT_INCRESE,
      payload: {
        count,
      },
    };
    dispatch(action);
  }

  function decrement() {
    const action = {
      type: COUNT_DECRESE,
    };
    dispatch(action);
  }

  return (
    <>
      <h1>{count} </h1>
      <button onClick={increment}> +</button>
      <button onClick={decrement}> -</button>
    </>
  );
};

export default Counter;
