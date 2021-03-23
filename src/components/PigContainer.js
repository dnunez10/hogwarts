import React from 'react'

export default function PigContainer(props) {
    const { weight, specialty, greased, 'highest medal achieved':highest_medal_achieved } = props.hog
    return(
        <div>
            <h3>Specialty:{specialty} </h3>
            <h3>Weight: {weight}</h3>
            <h3>{greased ? 'Greased' : 'Not Greased'}</h3>
            <h3>highest medal achieved: {highest_medal_achieved}</h3>
        </div>
    )
}