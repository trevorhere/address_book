import seedData from './addressBookSeedData'

export const addressBookService = () => {

	let ADDRESS_BOOK: any = []

	const test = () => {
		console.log('running address book service')
	}

	test()

	const getAddressBook = () => { 
		return ADDRESS_BOOK.sort((a: any,b: any) => a.last_name > b.last_name)
	}
	
	const setAddressBook = (newAddressBook: any) => {
		ADDRESS_BOOK = [...newAddressBook]
	}

	const addContactToAddressBook = (newContact: any) => {
		newContact.id = new Date().valueOf() + "";
		ADDRESS_BOOK = [...ADDRESS_BOOK, newContact];
		console.log(ADDRESS_BOOK)
	}

	const deleteContactFromAddressBook = (contact_id: String) => {
		if(!contact_id) throw new Error('Invalid Argument')
		setAddressBook(ADDRESS_BOOK.filter((contact: any) => contact.id != contact_id))
	}

	const getContact = (contact_id: string)	=> {
		let contact_index = ADDRESS_BOOK.findIndex((contact: any) => contact.id == contact_id)
		return ADDRESS_BOOK[contact_index]
	}
	
	const  editContactFromAddressBook = (contact_id: String, new_values: any) => {
		let contact_index = ADDRESS_BOOK.findIndex((contact: any) => contact.id == contact_id)

		if(contact_index < 0){ 
			console.log(`cant find user ${contact_id}`)
			throw new Error("no contact found")
		}

		ADDRESS_BOOK[contact_index] = {...ADDRESS_BOOK[contact_index], ...new_values} // old values always get overwritten
	}

	const seedAddressBook = () => {
		setAddressBook(seedData)
		console.log('address book seeded: ', ADDRESS_BOOK)
	}
	
	
	return { 
		getAddressBook, 
		setAddressBook, 
		addContactToAddressBook,
		deleteContactFromAddressBook,
		editContactFromAddressBook,
		seedAddressBook,
		getContact
	}
}

