// Add your code here


function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
        .then(resp => resp.json())
        .then(newUser => createUser(newUser))
        .catch(error => reportError(error.message))

}


function createUser(newUser) {
    document.body.append(newUser["id"])
}

function reportError(error) {
    document.body.append(error)
    console.log(error)
}


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     });
//