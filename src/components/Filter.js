import React from 'react'

const Filters = () => {
    return (
        <div className='ui form'>            
            <div className='field'>
            <h3>sort by</h3>
                <select name='type' id='type'>
                    <option value='name'>name</option>
                    <option value='weight'>weight</option>
                </select>
            </div>
            <div>
             <div>
            <h3>filter</h3>
                <select name='type' id='type'>
                    <option value='all'>All</option>
                    <option value='greased'>Greased</option>
                    </select>
                </div>
            </div>                  
        </div>
    )
}

export default Filters