$(() => {
    $('#comment-area button').click(() => {
        $.post('api/comment', {comment: $('#comment').val()})
        .done(() => {
            console.log('success!')
        })
    })
})
