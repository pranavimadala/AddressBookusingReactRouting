import * as React from "react";
import { Contact } from "../models/Contact";
import { Link } from "react-router-dom";
import { ContactService } from '../services/service';
interface IState{
  contacts:Contact[]
}
export class AllDetailComponent extends React.Component<{},IState> {
  service: ContactService;
  constructor(props: any) {
    super(props);
    this.service = new ContactService();
    this.state={
      contacts:this.service.getAllContacts()
    }
    
  }


  displayall(contacts: Contact[]) {
    return (contacts.map(d =>
      <ul key={d.id} className="display-item">
        <Link to={`/details/${d.id}`} className="display">
          <li >{d.name}</li>
          <li >{d.email}</li>
          <li >{d.contactnumber}</li>
        </Link>
      </ul>
    )
    )
  }

  render() {
    return (
      <div className="main-container">
        <h1>Contacts </h1>
        <ol className="display-list">
          {this.displayall(this.state.contacts)}

        </ol>
      </div>
    )
  }
}