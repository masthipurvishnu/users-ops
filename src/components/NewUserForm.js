import { React, Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

class NewUserForm extends Component {
    state = {
        firstName: 'abc',
        lastName: 'xyz'
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label >First Name</Label>
                    <Input required placeholder="First Name" value={this.state.firstName}
                        onChange={this.handleFirstNameChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label >Last Name</Label>
                    <Input required placeholder="Last Name" value={this.state.lastName}
                        onChange={this.handleLastNameChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}
export default NewUserForm