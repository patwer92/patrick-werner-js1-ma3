// Loop through the results and display the following properties in HTML, but only for the first eight results:

// name
// rating
// number of tags (not the tag details, just the amount of tags)


// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.




const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

container = document.querySelector(".results");

async function apiCall() {
    try {
        const response = await fetch(apiUrl);

        const data = await response.json();

        const games = data.results;

        // console.log(games);

        container.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            // console.log(games[i].name);
            // console.log(games[i].rating);
            // console.log(games[i].tags.length);

            if (i === 8) {
                break;
            }

            container.innerHTML += `<div class="result">Name: ${games[i].name}</br>Rating: ${games[i].rating}</br>Tags: ${games[i].tags.length}</div>`;
        }


    } catch (error) {
        console.log(`An error occured`);
        container.innerHTML = `An error occured`;
    }
}

apiCall();