import * as React from "react";
import { Contact } from "../models/Contact";
import { ContactService } from '../services/service';
interface State {
    contact: Contact
}
interface Props{
    history:any
    match:{
       params:{
           id:string
       }
    }
}
export class FormComponent extends React.Component<Props, State> {
    service: ContactService;
    mode: string
    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.service = new ContactService();
        console.log(props);
        this.state = {
            contact: this.props.match.params.id === undefined ? new Contact(0,' ')
                : this.service.getContact(parseInt(this.props.match.params.id))
        }
        this.mode = this.state.contact.id === 0 ? "Add" : "Edit"
       
       
    }

    handleSubmit(event: any) {
        if (this.mode === 'Add')
            {
                this.service.addContact(this.state.contact);
                this.setState({
                    contact: new Contact(0,' ')
                })
            }
        else
           { 
               this.service.editContact(this.state.contact);
           }
        this.props.history.push('/home');
        event.preventDefault();
    }
    
    changeHandler(event: any) {

        this.setState(
            {
                contact: {
                    ...this.state.contact, [event.target.name]: event.target.value
                }
            }

        );
        
    }
    render() {


        return (<div className="body-routing form-container">
            <h1 className="property-title">{this.mode} Contact</h1>
            <form onSubmit={this.handleSubmit} >

                <label>
                    Employee Id:
                     <input type="text" name='id' value={this.mode === 'Add' ? ' ' : this.state.contact.id} disabled className="in-container"/>
                </label>
                <br /><br />
                <label >
                    Employee name:
                     <input type="text" pattern="[A-Z a-z]*" name='name' value={this.state.contact.name} onChange={this.changeHandler} required className="in-container" />
                </label><br /><br />
                <label htmlFor="email">
                    Employee email:
                     <input type="email" name='email' value={this.state.contact.email} onChange={this.changeHandler} required className="in-container"/>
                </label><br /><br />
                <label>
                    Employee Department:
                     <input type="text" pattern="[A-Z a-z]*" name='department' value={this.state.contact.department} onChange={this.changeHandler} required className="in-container"/>
                </label><br /><br />
                <label>
                    Employee contactnumber:
                     <input type="text" name='contactnumber' value={this.state.contact.contactnumber} onChange={this.changeHandler} required className="in-container"/>
                </label><br /><br />
                <input type="submit" value={this.mode} className="edit-class"/>
            </form>
            
        </div>)
    }
}