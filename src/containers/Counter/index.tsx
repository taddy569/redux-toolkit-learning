import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import { selectCounterValue } from "redux/store/selectors";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "redux/slices/counter";

import { CounterComponent } from "components";
import { count } from "console";

export default function Counter() {
  const counterValue = useAppSelector(selectCounterValue)
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState('2')
  const incrementValue = Number(incrementAmount) || 0


  // DEATHLY WRONG: IF WE PASS
  // () => dispatch(decrement()) down to child component
  // so, the child only know that a function and return 
  // an action, not the true DISPATCH
  const dispatchDecrement = () => dispatch(decrement())
  const dispatchIncrement = () => dispatch(increment())
  const dispatchIncrementByAmount = (incrementValue: number) => {
    dispatch(incrementByAmount(incrementValue))
  }
  const dispatchIncrementAsync = (incrementValue: number) => {
    dispatch(incrementAsync(incrementValue))
  }

  return (
    <CounterComponent
      count={counterValue}
      dispatchDecrement={dispatchDecrement}
      dispatchIncrement={dispatchIncrement}
      dispatchIncrementByAmount={dispatchIncrementByAmount}
      dispatchIncrementAsync={dispatchIncrementAsync}
      incrementValue={incrementValue}
      setIncrementAmount={setIncrementAmount}
    />
  )
}