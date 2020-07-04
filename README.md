# CoSchedule_Challenge_ZB

This is a simple project that grabs data from a public "Joke" API (https://github.com/15Dkatz/official_joke_api). The project allows the user to delete data, create data, and search for certain criteria.

The project runs a local server using Node.js and the client can be used at http://127.0.0.1:3000/

Once you hit the "Get 10 Jokes" button, it randomly retrieves 10 programming jokes from the API. The client then displays a table of controls that you may use to manipulate the data. 

    If you enter the number of joke in the designated text area and hit the delete button, it will delete that joke.
  
    Search a key word in the search area in order to display all jokes that apply to this criteria.
  
    Create your own joke by entering a setup and punchline and clicking the "Create Joke" button. Your joke will be added to the end of the list.

<h2>Directions:</h2>

1.) Type "node app.js" in the terminal to start the server.

2.) You may now go to "http://127.0.0.1:3000/" in a web browser to control the client.
