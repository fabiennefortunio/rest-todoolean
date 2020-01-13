
var list = $('todoList').append('todoList').val();



//llamada ajax
function createList(){
    $.ajax({
        'url': 'http://157.230.17.132:3008/',
        'data': {
            'text': todos,

        },
        'method': 'GET',
        'dataType': 'json',
        'success': function(data_response,status,hrq) {
            var i;
            if(status=="success"){
                if(data_response.success){
                    loadList=data_response.response;

                }
                else{
                    console.log("Error en la peticion");
                }
            }
            else{
                console.log("Error en la comunicación con el servidor.");
            }
        }
    });
}
