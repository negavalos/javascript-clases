// axios para hacer llamadas a sitios externos
import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(function (response) {
    // handle success
    console.log("Success!!");
    console.log(response.data.moves);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR!!");
    console.log(error);
  });