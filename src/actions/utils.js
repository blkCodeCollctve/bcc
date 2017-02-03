import axios from 'axios'
//
function getKey(filename) {
  fetch({
            method: 'GET',
            async: false,
            url: filename,
            dataType: 'jsonp',
            success: function (){
              //have the function return value base off of the apiname parameter
              return value;
            },
            error: function (error){
              return error
            }
        });
}

function getResponse(url){
  response = axios.get(url)
  console.log("THE RESPONSE", response);
  return response
}


export {
  getKey,
  getResponse
}
