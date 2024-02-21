import { LightningElement, wire } from 'lwc';
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LASTNAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'email' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS
    @wire (getContacts)
    contacts;
}