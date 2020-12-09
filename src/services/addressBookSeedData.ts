	const seedData =  [{
		first_name: "Doc",
		last_name: "Brown",
		email: "DMC@1985.com",
		phone: "555-555-5555",
		address_1: "1640 Riverside Dr",
		address_2: "",
		city: "Hill Valley", 
		state: "CA", 
		country: "United States Of America"
	},
	{
		first_name: "Jerry",
		last_name: "Seinfield",
		email: "no_soup@for_you.com",
		phone: "555-555-5555",
		address_1: "129 West 81st",
		address_2: "Apt 5A",
		city: "New York", 
		state: "New York", 
	},
	{
		first_name: "Sponge",
		last_name: "Bob",
		email: "pine@apple.com",
		phone: "555-555-5555",
		address_1: "124 Conch St",
		address_2: "",
		city: "New York", 
		state: "New York", 
	},
	{
		first_name: "Bruce",
		last_name: "Wayne",
		email: "loves_batz@waynemail.com",
		phone: "555-555-5555",
		address_1: "1007 Mountain Dr",
		address_2: "",
		city: "Gotham City", 
		state: "New Gotham", 
	},
	{
		first_name: "Tony",
		last_name: "Stark",
		email: "i_am@ironmail.com",
		phone: "555-555-5555",
		address_1: "10880 Malubu Point",
		address_2: "",
		city: "Malibu", 
		state: "California", 
	},
].map((contact, index) =>  { 
	return {...contact, id: new Date().valueOf() + index + "" }
})


export default seedData