import React, { FC, Dispatch, SetStateAction } from 'react'
import styles from 'features/counter/Counter.module.css'

type CounterAction = {
  payload: undefined,
  type: string
}
type DefaultChangeCounter = () => CounterAction
type CustomChangeCounter<T> = (arg: T) => void

type CounterProps = {
  count: number,
  dispatchDecrement: DefaultChangeCounter,
  dispatchIncrement: DefaultChangeCounter,
  dispatchIncrementByAmount: CustomChangeCounter<number>,
  dispatchIncrementAsync: CustomChangeCounter<number>,
  incrementValue: number,
  setIncrementAmount: Dispatch<SetStateAction<string>>
}

const Counter: FC<CounterProps> = ({
  count,
  dispatchDecrement,
  dispatchIncrement,
  dispatchIncrementByAmount,
  dispatchIncrementAsync,
  incrementValue,
  setIncrementAmount,
}) => {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={dispatchDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={dispatchIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementValue}
          onChange={(e) => setIncrementAmount(e.target.value)} 
        />
        <button
          className={styles.button}
          onClick={() => dispatchIncrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatchIncrementAsync(incrementValue)}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

export default Counter