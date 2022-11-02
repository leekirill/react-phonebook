import React from "react"
import { filter } from '../../redux/contacts/contacts-actions'
import { useSelector, useDispatch } from "react-redux"


export default function Filter() {
    
    const value = useSelector(state => state.filter)

    const dispatch = useDispatch()
    const onChange = (e) => dispatch(filter(e.target.value))

    return (
        <React.Fragment>
            <label className="labels__search">
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    placeholder="Find contact by name"
                ></input>
            </label>
        </React.Fragment>
    )
}
