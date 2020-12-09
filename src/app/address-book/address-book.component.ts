import { Component, OnInit } from '@angular/core';
import { addressBookService } from '../../services/addressBook' 

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})

export class AddressBookComponent implements OnInit {

  constructor() { }

  addressBook = null;

  ngOnInit(): void {
	  this.addressBookService = addressBookService();
	  this.addressBookService.seedAddressBook();
	  this.addressBook = this.addressBookService.getAddressBook();
  }
  
  addressBookService: any = null;

  formFirstName = "";
  formLastName = "";
  formAddress1 = "";
  formAddress2 = "";
  formCity= "";
  formState = "";
  formEmail = "";
  formPhone = "";

  onSubmit(){}

  submitContactInformation(){ 
    alert(this.diagnostic)
    this.showAddContactModal = false

    if(this.selectedContactID){
      this.addressBookService.editContactFromAddressBook(this.selectedContactID, {
        "first_name": this.formFirstName, 
        "last_name": this.formLastName, 
        "address_1": this.formAddress1,
        "address_2": this.formAddress2,
        "city": this.formCity, 
        "state": this.formState, 
        "email": this.formEmail,
        "phone": this.formPhone
      })
    } else {
      this.addressBookService.addContactToAddressBook({
        "first_name": this.formFirstName, 
        "last_name": this.formLastName, 
        "address_1": this.formAddress1,
        "address_2": this.formAddress2,
        "city": this.formCity, 
        "state": this.formState, 
        "email": this.formEmail,
        "phone": this.formPhone
      })
    }

   this.resetFormFields();
   this.addressBook = this.addressBookService.getAddressBook();
  }

  selectedContactID = null;  
  showAddContactModal = true;


  resetFormFields(){
    this.selectedContactID = null;
    this.formFirstName = "";
    this.formLastName = "";
    this.formAddress1 = "";
    this.formAddress2 = "";
    this.formCity= "";
    this.formState = "";
    this.formEmail = "";
    this.formPhone = "";
  }

  onSelect(contactID: any){
	  this.selectedContactID = contactID;
  }

  toggleAddContactModal(event: Event){
    alert('test')	 
    this.selectedContactID = null
	  this.showAddContactModal = !this.showAddContactModal;
  }
  
  addContact(event: Event){
	  this.showAddContactModal = true;
	  alert('test')
  }

  editContact(contact: any){
    alert('edit hit')
    this.selectedContactID = contact?.id
	  this.showAddContactModal = true;
	  this.formFirstName = contact.first_name;
		this.formLastName = contact.last_name;
		this.formAddress1 = contact.address_1;
		this.formAddress2 = contact.address_2;
		this.formCity= contact.city;
		this.formState = contact.state;
		this.formEmail = contact.email;
		this.formPhone = contact.phone;
	  this.showAddContactModal = true;
	  console.log('contact: ', contact)
  }
 
  deleteContact(contact: any){
	  this.addressBookService.deleteContactFromAddressBook(contact?.id)
	  this.addressBook = this.addressBookService.getAddressBook()

	  alert('delete hit')
  }

  title = 'test';

  get diagnostic(){ 
	  return JSON.stringify({
		  "first name": this.formFirstName,
		  "last name": this.formLastName,
		  "ad1": this.formAddress1,
		  "ad2": this.formAddress2,
		  "phone": this.formPhone,
		  "email": this.formEmail,
		  "city": this.formCity,
		  "state": this.formState,
		}
	)}
}
