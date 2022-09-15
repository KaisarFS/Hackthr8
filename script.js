// Thread DB
const threadDb = [
	{
		id: 1,
		title: "What is Lorem Ipsum?", 
		post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		createdBy: 'kaisarFS',
		date: 09/19/2022
	},
	{
		id: 2,
		title: "What is Lorem Ipsum?", 
		post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
		createdBy: 'abins',
		date: 08/20/2022
	},
	{
		id: 3,
		title: 'Where can I get some?', 
		post: "from sections",
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
function addPost (newPost) {
	// console.log(db_thread);
  let status;
  let obj = {}

	for(let i = 0; i < threadDb.length; i++) {
	  // console.log(threadDb[i].post);
	  let id = threadDb[i].id
	  let title = threadDb[i].title
	  let post = threadDb[i].post
	  let createdBy = threadDb[i].createdBy
	  let date = threadDb[i].date
  
    if (title === '' || title === undefined) {
      status = false
    } else {
      status = true
    }

    if (status) {
      obj = {
        id,
        title,
        post,
        createdBy,
        date,
        }
    }
	}
  return obj
}
  
  console.log(addPost(threadDb));
// Read 

// Update

// Delete




