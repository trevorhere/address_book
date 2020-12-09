import { addressBookService } from './addressBook'
import  seedData from './addressBookSeedData'

const runAddressBookTest = () => {
		let failedTestCount = 0;
	try {

		// init
		let testAddressBookService = addressBookService()
		testAddressBookService.seedAddressBook()
		console.log('test address book: ', testAddressBookService.getAddressBook())

		// test getAddressBook && seedAddressBook
		if(testAddressBookService.getAddressBook().length !== seedData.length){
			console.log('Test Failed, expected seedData length to match addressBook length')
			failedTestCount ++;
		}

		// test deleteContactFromAddressBook
		testAddressBookService.deleteContactFromAddressBook(seedData[0].id)
		if(testAddressBookService.getAddressBook().length !== (seedData.length - 1)){
			console.log('Test Failed, expected address book length to be one less than seed data after deletion')
			failedTestCount ++;
		}

		// test addContactToAddressBook 
		let addressBookLengthBeforeAddition = testAddressBookService.getAddressBook().length
		testAddressBookService.addContactToAddressBook({
			id: new Date().valueOf(), 
			first_name: "tester",
			last_name: "last",
			email: "mr@test.com",
			phone: "5559991122",
			address_1: "101 North St",
			address_2: "Apt 654A",
			city: "Big City",
			state: "AA"
		})
		if(testAddressBookService.getAddressBook().length !== addressBookLengthBeforeAddition + 1){
			console.log('Test Failed, expected address book length to increment by one after adding a contact')
			failedTestCount ++;
		}

		// test editContactFromAddressBook && getContact, this test is likely broken
		testAddressBookService.editContactFromAddressBook(seedData[0].id,{ ...seedData[0], "first_name":"HUZZAH" })
		if(testAddressBookService.getContact(seedData[0].id).first_name !== "HUZZAH"){
			console.log('Test Failed, expected first_name to update after editing contact')
			failedTestCount ++;
		}
	
	} catch(error){
		console.log('error', error)
	}

	console.log(`Tests Passed: ${4 - failedTestCount} / 4`)

}

export default runAddressBookTest 