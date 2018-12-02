


console.log('before');
run();
console.log('after');


async function run() {
    const user = await getUser(11);
    console.log(user);
    const repos = await getRepositories(user.id);
    console.log(repos);
    const commits = await getCommits(repos);
    console.log(commits); 
 }


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



function getCommits(repoId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('get commits')
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000);

    })
}
