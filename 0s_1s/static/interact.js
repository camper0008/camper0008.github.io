const blankBoard = `┌───┬───┬───┐
│ # │ # │ # │
├───┼───┼───┤
│ # │ # │ # │
├───┼───┼───┤
│ # │ # │ # │
└───┴───┴───┘`

const get = window.get

let display = () => {
    $('#player').val($('#player').val() ? $('#player').val() : '0');    

    let data = get('getInfo')
    let newString = '';
    let current = 0;
    for (let i = 0; i < blankBoard.length; i++) {
        let char = blankBoard.slice(i, i + 1)
        if (char == '#') {
            newString += `<button index='${current}' taken='${data.board[current]}'>${data.board[current]}</button>`
            current++;
        } else {
            newString += char
        }
    }
    $("#board").html(newString)

    $('#board button').unbind('click')
    if (data.winner) {
        $('#msg').text(`${data.winner} won! Game over.`);
    }
    else {
        $('#msg').text('');

        $('#board button[taken*=\'#\']').each((_, obj) => {
            $(obj).click(() => {
                if ($('#player').val() == data.currentPlayer) {
                    get({move: `${$('#player').val()}${$(obj).attr('index')}`});
                    display();
                }
            })
        })
        $('#turn').text('Player turn: ' + data.currentPlayer);         
    };
}
display();

$('#reset').click( () => {
    get({reset: true});
    display();
});

$('#player').blur( () => {
    $('#player').val($('#player').val().replace(/[^01]+/g, ''))
    $('#player').val($('#player').val().slice(0,1))
});