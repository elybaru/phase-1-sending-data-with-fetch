// Add your code here


function submitData(inputName, inputEmail) {
    fetch("http://localhost:3000/users") {
        method: "POST",
            headers: {
            "Content-Type": "application/json",
                Accept: "application/json",
  },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
        }),
    
});



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

