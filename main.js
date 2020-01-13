$(document).ready(function() {


    $.ajax({
        'url': 'http://157.230.17.132:3008/todos/',
        'method': 'GET',
        'success': function(data) {
            var todos = data;
            for (var i = 0; i < todos.length; i++) {
                var todo_corrente = todos[i];
                var testo_todo = todo_corrente.text;
                $('#todo-list').append('<li>' + testo_todo + '</li>');

            }
        },
        'error':function() {
            alert('error');
        }

    });

    // creazione nuovo todo
    $('new-todo-button').click(function() {
        //leggo il testo inserito dal utente
        // faccio una chiamata AJAX in POST per salvare il nuovo todo
        var testo_nuovo_todo = $('#new-todo-text').val();
        console.log(testo_nuovo_todo);
        $('#new-todo-text').val('');



        $.ajax({
            'url': 'http://157.230.17.132:3008/todos/',
            'method': 'POST',
            'data': {
                'text': testo_nuovo_todo
            },
            'success': function(data) {
        
            },
            'error':function() {
                alert('error');
            }

        });

    })

});
