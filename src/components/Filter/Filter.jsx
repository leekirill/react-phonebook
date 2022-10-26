import React from "react"
import * as action from '../../redux/contacts/contacts-actions'
import { useSelector, useDispatch } from "react-redux"


export default function Filter() {
    
    const value = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onChange = (e) => dispatch(action.filter(e.target.value))

    return (
        <React.Fragment>
            <label className="labels__search">
            Find contact by name
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    placeholder="Type here"
                ></input>
            </label>
        </React.Fragment>
    )
}
