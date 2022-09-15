const userDb = [
	{
		username: 'yossiadirta',
		password: 'miaw'
	},
	{
		username: 'kaisarFS',
		password: 'meong'
	},
	{
		username: 'IbrahimAd98',
		password: 'auuu'
	},
	{
		username: 'adrian1414',
		password: 'woof'
	},
	{
		username: 'yossiadirta',
		password: 'mengg'
	},
]

function validateUser(username, password, userDb) {
	const found = userDb.find(user => user.username === username && user.password === password)
	if (found) {
		return true
	}
	return false
}

// window.location.assign()






