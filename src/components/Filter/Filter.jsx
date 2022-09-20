import React from "react"

export default function Filter({ value, handleChange }) {
    
    return (
        <React.Fragment>
            <label className="labels__search">
            Find contact by name
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={handleChange}
                    placeholder="Type here"
                ></input>
            </label>
        </React.Fragment>
    )
}