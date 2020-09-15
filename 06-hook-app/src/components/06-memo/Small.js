import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('me voolvi a llamar');
    return (
        <small>{value}</small>
    )
})
