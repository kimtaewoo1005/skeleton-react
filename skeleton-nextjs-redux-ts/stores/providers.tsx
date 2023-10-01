'use client'

import { Provider } from 'react-redux'

import { reduxStore } from './store'

export default function Provides(props: React.PropsWithChildren) {
    return (
        <Provider store={reduxStore}>
            {props.children}
        </Provider>
    )
}