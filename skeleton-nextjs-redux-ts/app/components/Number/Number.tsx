'use client'
import {
    numberSlice,
    selectNumber,
    useDispatch,
    useSelector,
} from '@/stores'

export const Number = () => {
    const dispatch = useDispatch();
    const number = useSelector(selectNumber);

    const handleIncrement = () => {
        dispatch(numberSlice.actions.increment());
    };

    const handleDecrement = () => {
        dispatch(numberSlice.actions.decrement());
    };

    return (
        <div>
            <div>Number: {number}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};