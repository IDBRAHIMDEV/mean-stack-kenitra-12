
console.log('before')

getUser(12, (myUser) => {
    console.log(myUser);
    getRepositories(myUser.id, (myRepos) => {
        console.log(myRepos)
        getCommits(myRepos, (myCommits) => console.log(myCommits))
    });

});

console.log('after')


function getUser(id, callback) {
    setTimeout(() => {
        console.log('get user from DB')
        callback({ id: id, name: "Mohamed IDBRAHIM" });
    }, 2000);
}

function getRepositories(userId, callback) {
    setTimeout(() => {
        console.log('get repositories')
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}



function getCommits(repoId, callback) {
    setTimeout(() => {
        console.log('get commits')
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}