import { Contact } from '../models/Contact';
export let contacts: Contact[] = [
  {
    id: 1,
    name: "pranavi",
    email: "anjala.pranavi@gmail.com",
    department: "Tech",
    contactnumber: "7095071396"
  },
  {
    id: 2,
    name: "anjala",
    email: "anjala@gmail.com",
    department: "Sales",
    contactnumber: "3414235345"
  }
];

export class ContactService {

  public generateId(): number {
    return contacts[contacts.length - 1].id + 1
  }

  public addContact(contact: Contact): Contact {
    contact.id = this.generateId();
    contacts.push(contact);
    return contact;
  }

  public deleteContact(id: number): number {
    contacts = contacts.filter((e) => e.id !== id);
    console.log(contacts);
    return id;
  }

  public editContact(contact: Contact): Contact {
    contacts = contacts.map((con) => { return con.id === contact.id ? { ...contact } : con });
    return contact;
  }

  public getContact(id: number): Contact {
    return (contacts.filter((con) => { return con.id === id })[0]);
  }

  public getAllContacts(): Contact[] {
    return contacts;
  }
 
}