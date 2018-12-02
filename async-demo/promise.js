

// const p = new Promise((resolve, reject) => {

//     let check = false;

//     if (check) {
//         resolve('this response is correct')
//     } else {
//         reject('response incorrect !!!!');
//     }
// })


// p.then((res) => console.log(res))
//     .catch((err) => console.log(err))
console.log('before')

getUser(11).then((res) => {
    console.log(res)
    return getRepositories(res.id)
})
.then((repos) => {
    console.log(repos);
})

console.log('after');


function getUser(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('get user from DB')
            resolve({ id: id, name: "Mohamed IDBRAHIM" });
        }, 2000);

    })
}

function getRepositories(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('get repositories')
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}


function getCommits(repoId, callback) {
    setTimeout(() => {
        console.log('get commits')
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}