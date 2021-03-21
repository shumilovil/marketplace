import { Button } from 'antd'
import React from 'react'

interface MapPropsIF {
    testRes: string
}

export const TestComponent: React.FC<MapPropsIF> = (props) => {
    return (
        <div>
            {props.testRes}
            <Button type="primary">Button</Button>
        </div>
    )
}