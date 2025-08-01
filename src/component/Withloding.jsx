import React from 'react'

export default function Withloading(WrappedComp) {
    return function Enhanced({ isLoading, ...rest }) {
        if (isLoading) {
            return <p>...Loading</p>
        }
        return <WrappedComp {...rest} />
    }
}