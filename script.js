function loadUsers(id){
    const url = `https://reqres.in/api/users/${id}`;

    $.ajax({
        url,
        success: function(data){
            console.log(data);
            addContainer(data);
        }
    })
}

function addContainer (data) {

    let container   = $("<div>");
    let first_name  = $("<h2>");
    let last_name   = $("<h2>");
    let avatar      = $("<img>");
    let email       = $("<h2>");
    let company     = $("<h2>");

    first_name.text(data.data.first_name);
    last_name.text(data.data.last_name);
    email.text(data.data.email);
    company.text(data.data.company);
    avatar.attr('src',data.data.avatar);
    

    container.append(first_name);
    container.append(last_name);
    container.append(avatar);
    container.append(email);
    container.append(company);

    container.addClass('mainContainer');

    $('.output').append(container);
 

    first_name.on('dblclick', changeVal);    
    last_name.on('dblclick', changeVal);    
    email.on('dblclick', changeVal);

    return container;
}

function changeVal(){
    let cur = $(this);
    let curText = cur.text();
    let input = $('<input>');
    input.val(curText);
    let parent = cur.closest('.mainContainer');
    parent.prepend(input);
    cur.remove();
    input.on('blur', saveChange);
}

function saveChange(){
    let cur = $(this);
    let curText = cur.val();
    let h2Elem = $('<h2>');
    h2Elem.text(curText);
    let parent = cur.closest('.mainContainer');
    parent.prepend(h2Elem);
    cur.remove();

}


$('.todo').on('submit', function(event) {
    event.preventDefault();
    let descr = $('.text').val();
    loadUsers(descr);
})