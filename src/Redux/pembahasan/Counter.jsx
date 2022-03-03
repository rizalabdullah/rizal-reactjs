import { useDispatch, useSelector } from "react-redux";
import { decrementWhitchCheckingAction, increment } from "../../app/Features/Counter/action";

const Counter = () => {
  let {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();
    return(
        <div>
             <button onClick={() => dispatch(decrementWhitchCheckingAction(1)) } style={{width:"40px"}} className="btn btn-success">-</button>
            {``} <span>{count}</span> {``}
              <button onClick={() => dispatch(increment(1)) } style={{width:"40px"}} className="btn btn-success">+</button>
        </div>
    )
}

export default Counter;