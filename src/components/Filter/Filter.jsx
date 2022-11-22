import React from "react"
import { filter } from '../../redux/contacts/contacts-reducer'
import { useSelector, useDispatch } from "react-redux"
import Form from 'react-bootstrap/Form';

export default function Filter() {
    
    const value = useSelector(state => state.filter)

    const dispatch = useDispatch()
    const onChange = (e) => dispatch(filter(e.target.value))

    return (
        <Form.Group>
            <Form.Label className="labels__search">
                <Form.Control
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    placeholder="Find contact by name"
                ></Form.Control>
            </Form.Label>
        </Form.Group>
    )
}
