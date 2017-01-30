import axios from 'axios'
//
function getKey(filename, apiname) {
  $.ajax({
            method: 'GET',
            async: false,
            url: filename,
            dataType: 'jsonp',
            success: function (){
              //have the function return value base off of the apiname parameter
            },
            error: function (error){
              console.error(error);
            }
        });
}

function getResponse(url){
  response = axios.get(url)
  return response
}


export {
  getKey,
  sendRequest
}
