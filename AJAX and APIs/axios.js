// axios.get("https://swapi.dev/api/people/1")
// .then((res) => {
//     console.log("Response:", res);
//     console.log("Data:", res.data)
// })
// .catch((err) => {
//     console.log("Error:", err);
// })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data)
//     } catch (err) {
//         console.log("Error:", err)
//     }
// }
const jokes = document.querySelector("#jokes");
const button = document.querySelector("#button");

const getDadJoke = async () => {
    try {
        //getting the json data
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com", config)
        //appending it to the list
        const newLI = document.createElement("li");
        newLI.append(res.data.joke);
        jokes.append(newLI);
    } catch (err) {
        console.log("ERROR!!!!", err)
    }
}

button.addEventListener("click", getDadJoke);