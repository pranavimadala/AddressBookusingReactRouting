import * as React from "react";
import { Contact } from "../models/Contact";
import { Link } from "react-router-dom";
import { ContactService } from '../services/service';
interface IState {
    selectedcontact: Contact

}
interface Props{
    history:any
    match:{
       params:{
           id:string
       }
    }
}
export class DetailComponent extends React.Component<Props, IState>{
    service: ContactService;
    constructor(props:Props) {
        super(props);
        this.service = new ContactService();
        this.state = {
            selectedcontact: this.service.getContact(parseInt(this.props.match.params.id))
        }

    }

    componentWillReceiveProps(nextProps: Props) {

        this.setState({
            selectedcontact: this.service.getContact(parseInt(nextProps.match.params.id))
        })
    }
    DeleteContact(id: number) {
        this.service.deleteContact(id);
        this.props.history.push('/home');
    }
    render() {

        return (
            <div className="body-routing">
                <h1>Contact details</h1>
                <ul>
                    <li>Employee Id: {this.state.selectedcontact.id}</li>
                    <li>Employee Name: {this.state.selectedcontact.name}</li>
                    <li>Email id: {this.state.selectedcontact.email}</li>
                    <li>Department: {this.state.selectedcontact.department}</li>
                    <li>ContactNUmber: {this.state.selectedcontact.contactnumber}</li>
                </ul>
                <br />
                <br />
                <div>
                    <Link to={`/form/${this.state.selectedcontact.id}`}>
                        EDIT
  </Link>

                    <button onClick={(e) => this.DeleteContact(this.state.selectedcontact.id)}>
                        DELETE
  </button>

                </div>
            </div>
        )
    }
}