// Thread DB
let threadDb = [
	{
		id: 1,
		title: "What is Lorem Ipsum?", 
		post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		createdBy: 'kaisarFS',
		date: 09/19/2022
	},
	{
		id: 2,
		title: "Where does it come from?", 
		post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
		createdBy: 'abins',
		date: 08/20/2022
	},
	{
		id: 3,
		title: 'Where can I get some?', 
		post: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		createdBy: 'yossi',
		date: 09/19/2022
	},
]

const commentDb = [
	{
		commentId: 1,
		postId: 1,
		comment: 'waduhh',
		createdBy: 'IbrahimAd98',
		date: 07/20/2022,
	},
	{
		commentId: 2,
		postId: 1,
		comment: 'wkkwwk',
		createdBy: 'AdrianLie',
		date: 07/20/2022,
	},
	{
		commentId: 3,
		postId: 3,
		comment: 'miaw miaw',
		createdBy: 'kucing',
		date: 07/20/2022,
	},
]

// Create

// Read 

// Update

function updateThread(id, database, newTitle, newThread) {
	/// kalau misal button edit dipencet maka thread dan title akan bisa diubah sesuai dengan inputan dari text string yang baru

	let dataToEdit = database.find(cari => cari.id === id)
	dataToEdit.title = newTitle
	dataToEdit.post = newThread
	dataToEdit.status = 'edited'
	
	return dataToEdit
}
console.log(updateThread(threadDb[3].id/*cari dinamisnya*/, threadDb, 'hayuuuuuk', 'hayoooook'))
// let click = addEventListener('click',threadDb)
// Delete
function deleteThread(thread, id) {
	/// semisal selected thread di thread page maka thread tersebut akan hilang
	database = thread.find(cari => cari.id === id)
	id.addEventListener('click')
}




