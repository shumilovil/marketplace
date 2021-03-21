import React from 'react'

interface MapPropsIF {
    testRes: string
}

export const TestComponent: React.FC<MapPropsIF> = (props) => {
    return (
        <div>
            {props.testRes}
        </div>
    )
}