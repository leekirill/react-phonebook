import React from "react"
import { nanoid } from "nanoid";

export default class ContactForm extends React.Component {
    state = {
        name: "",
        number: "",
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    };
    
    handleSubmit = e => {
        e.preventDefault();

        // валидация имени
        const contactsName = this.props.сontactState.every(e => e.name !== this.state.name)

        contactsName ? 
        this.props.onSubmit({
            ...this.state,
            id: nanoid(2)
        }) : alert(`${this.state.name} is already in contacts.`)

        this.reset()

    }
    
    reset = () => {
        this.setState({
        name: "",
        number: "",
        });
    };

    render() {
        const {name, number} = this.state

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="labels">
                    <label className="labels__item">
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="labels__item">
                        Tel
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <button type="submit" className='button'>Add contact</button>
            </form>)
        }
}