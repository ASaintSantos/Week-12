const URL = "https://659628cd04335332df8396fc.mockapi.io/api/1/users"


function getUsers() {
    $.get(URL).then(data => {
    data.map(user => {
        $('tbody').append(
            $(`
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.avatar}</td>
                <td>${user.location}</td>
                <td>${user.birthDate}</td>
                <td>
                    <button onClick="deleteUser(${user.id})">🗑️</button>
                </td>
            </tr>
            `)
        )
    })
})
}
 getUsers();

$('#submitUser').click(function () {
    
    // let newUser = {
    //     fullName = 
    // }
    
    $.post(URL, {
        id: $('updateId').val(),
        name: $('#fullName').val(),
        avatar: $('#newAvatar').val(),
    })
})

// let deleteUser = document.getElementById('URL');

// while (URL.firstChild) {
//     URL.removeChild(URL.firstChild);
// }


function deleteUser (id) {
    $.ajax(`${URL}/${id}`, {
        type: 'DELETE'
    }) .then(getUsers(-1));
}


function updateUser() {
    let id = $('#updateId').val()

    $.ajax(`${URL}/${id}`, {
        method: 'PUT',
        data: {
            name: $('#updateName').val(),
            avatar: $('#updateAvatar').val(),
         }
    })
}

$('#updateForm').click(updateUser)