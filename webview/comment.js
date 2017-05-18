const $ = require('jquery')
$(() => {
    $('#comment-form').submit((event) => {
        event.preventDefault();
        
        $.ajax({
            url: './api/comment',
            type: 'GET',
            data: {
                comment: $('#comment').val() 
            },
            timeout: 1000,
            beforeSend: () => {$('#comment').val("")}
        })
    })
})
