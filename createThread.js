const db_thread = [
  {
    id: 1,
    title: 'pisang goreng',
    post: 'hari ini gw makan pisang goreng',
    createdBy: 'nama_user1',
    date: '05/10/20'
  },
  {
    id: 2,
    title: 'sambal goreng',
    post: '',
    createdBy: 'nama_user2',
    date: '06/10/20'
  },
  {
    id: 3,
    title: 'bakwan goreng',
    post: 'hari ini gw makan bakwan goreng',
    createdBy: 'nama_user3',
    date: '07/10/20'
  }
]

function addPost (newPost) {
  // console.log(db_thread);
  for(let i = 0; i < db_thread.length; i++) {
    console.log(db_thread[i].post);
    let perId = 
    let perTitle = db_thread[i].post
    let perPost = db_thread[i].post

    let obj = {
      id 
    }

    if (perTitle === '') {
      // return 'Tolong masukkan judul'
      console.log('Tolong masukkan judul');
      perPost = 'inputan_dari_user'
    }

    if (perTitle.length < 5) {
      // return 'Judul teralu pendek'
      console.log('Judul terlalu pendek');
    } 
    
    if (perPost === '') {
      console.log('Isi curahan anda');
    }

    db_thread.push()
  }
}

console.log(addPost(db_thread));