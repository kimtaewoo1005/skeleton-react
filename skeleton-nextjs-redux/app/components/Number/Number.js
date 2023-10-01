'use client'

import {
    numberSlice,
    selectNumber,
    useDispatch,
    useSelector,
} from '@/stores'

export function Number() {
    const dispatch = useDispatch()
    const number = useSelector(selectNumber)
    return (
        <div>
            <h1>Number</h1>
            <button 
                className='mr-2'
                onClick={() => dispatch(numberSlice.actions.increment())}
            >
                Increment
            </button>
            <button 
                className='mr-2'
                onClick={() => dispatch(numberSlice.actions.decrement())}
            >
                Decrement
            </button>
            <span className='mr-2'>{number}</span>
        </div>
    )
}