// Thread DB
let threadDb = [
<<<<<<< HEAD
	{
		id: 1,
		title: "What is Lorem Ipsum?",
		post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		createdBy: 'kaisarFS',
		date: '09/19/2022'
	},
	{
		id: 2,
		title: "Where does it come from?",
		post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
		createdBy: 'abins',
		date: '08/20/2022'
	},
	{
		id: 3,
		title: 'Where can I get some?',
		post: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		createdBy: 'yossi',
		date: '09/19/2022'
	},
]

const commentDb = [
	{
		commentId: 1,
		postId: 1,
		comment: 'waduhh',
		createdBy: 'IbrahimAd98',
		date: 07 / 20 / 2022,
	},
	{
		commentId: 2,
		postId: 1,
		comment: 'wkkwwk',
		createdBy: 'AdrianLie',
		date: 07 / 20 / 2022,
	},
	{
		commentId: 3,
		postId: 3,
		comment: 'miaw miaw',
		createdBy: 'kucing',
		date: 07 / 20 / 2022,
	},
]

// Create
function newThread() { // title, post, username, database
	let inpTitle = document.getElementById('inp_title').value;
	let inpPost = document.getElementById('inp_post').value;
	// alert(inpTitle, inpPost)
	console.log(threadDb)
	threadDb.push({
		id: (threadDb.length + 1),
		title: inpTitle,
		post: inpPost,
		// createdBy: username,
		date: (new Date()).toLocaleDateString("en-US")
	})
	// console.log('masukk');
	console.log(threadDb)

	renderThread(threadDb);
=======
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    createdBy: "kaisarFS",
    date: "09/19/2022",
  },
  {
    id: 2,
    title: "Where does it come from?",
    post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
    createdBy: "abins",
    date: "08/20/2022",
  },
  {
    id: 3,
    title: "Where can I get some?",
    post: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    createdBy: "yossi",
    date: "09/19/2022",
  },
];

const commentDb = [
  {
    commentId: 1,
    postId: 1,
    comment: "waduhh",
    createdBy: "IbrahimAd98",
    date: 07 / 20 / 2022,
  },
  {
    commentId: 2,
    postId: 1,
    comment: "wkkwwk",
    createdBy: "AdrianLie",
    date: 07 / 20 / 2022,
  },
  {
    commentId: 3,
    postId: 3,
    comment: "miaw miaw",
    createdBy: "kucing",
    date: 07 / 20 / 2022,
  },
];

// Create
function newThread(title, post, username, database) {
  database.push({
    id: threadDb.length + 1,
    title,
    post,
    createdBy: username,
    date: new Date().toLocaleDateString("en-US"),
  });
>>>>>>> deb2341d9330a9860123319b6b6e2b8ea3499093
}

newThread("pensil", "pensil alat tulis", "kasiarFS", threadDb);

console.log(threadDb);

<<<<<<< HEAD
// Read 
function renderThread(database) {
	const threadList = document.getElementById("thread-container")
	for (const thread of database) {
		threadList.innerHTML += `<div class="thread-card">
        <div id="thread-title" class="thread-title">
          <h2><a href="/detail-thread.html">${thread.title}</a></h2>
        </div>
        <div id='thread-description' class="thread-description">
          <p>${thread.post}</p>
        </div>
        <div id="thread-info" class="thread-info">
          <p><a href="/">User</a> · ${thread.date} · <a href="/" class='edit'>edit</a> · <a href="/"
              class='delete'>delete</a></p>
        </div>
      </div>`
	}
}

renderThread(threadDb)
=======
// Read
>>>>>>> deb2341d9330a9860123319b6b6e2b8ea3499093

// Update
function editThread(id, newTitle, newPost, database) {
  let threadToEdit = database.find((thread) => thread.id === id);
  threadToEdit.title = newTitle;
  threadToEdit.post = newPost;
}

// editThread(1, 'miaw miaww', 'meongmmiawmeonggmiawwwmiawwww', threadDb)
// console.log(threadDb);

// Delete
function deleteThread(id, database) {
  // let threadToDelete = database.find(thread => thread.id === id)
  // let idx = database.indexOf(threadToDelete)
  // database.splice(idx, 1)
  let thread = database.filter((thread) => thread.id !== id);
  database = thread;
  return database;
}

// threadDb = deleteThread(1, threadDb)
// deleteThread(1, threadDb)
// console.log(threadDb);

<<<<<<< HEAD

=======
function renderThread(database) {
  const threadList = document.getElementById("thread-container");
  for (const thread of database) {
    threadList.innerHTML += `<div class="thread-card">
        <div id="thread-title" class="thread-title">
          <h2><a href="/detail-thread.html">${thread.title}</a></h2>
        </div>
        <div id='thread-description' class="thread-description">
          <p>${thread.post}</p>
        </div>
        <div id="thread-info" class="thread-info">
          <p><a href="/">Anonymous</a> · ${thread.date} · <a href="/edit-thread.html" id='edit-thread' class='edit'><i
					class="fa-solid fa-pen-to-square"></i></a> <a href="/" id='delete-thread' class='delete'><i
					class="fa-solid fa-trash"></i></a></p>
        </div>
      </div>`;
  }
}

renderThread(threadDb);
>>>>>>> deb2341d9330a9860123319b6b6e2b8ea3499093
