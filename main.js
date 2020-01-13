
var todoList=[];


function createList(){
  month++;
  if(month>11){
      month=11;
  }
}

//llamada ajax
function createList(){
    $.ajax({
        'url': 'http://157.230.17.132:3008/',
        // 'data': {
        //
        // },
        'method': 'POST',
        // 'dataType': 'json',
        'success': function(e) {
            var i;
            if(status=="success"){
                if(data_response.success){
                    festivitiesList=data_response.response;
                    for(i =0;i<festivitiesList.length;i++){
                        festivitiesList[i].date=moment(festivitiesList[i].date);
                    }
                }
                else{
                    console.log("Error en la peticion");
