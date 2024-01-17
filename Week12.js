const URL = "https://659628cd04335332df8396fc.mockapi.io/api/1/users"

async function getUsers() {
fetch(URL)
.then(res => res.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error))
}

getUsers();

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

$('#submitUser').click(function () {
    $.post(URL, {
        fullName: $('#fullName').val(),
        newAvatar: $('#newAvatar').val(),
    })
})

function deleteUser (id) {
    $.ajax(`${URL}/${id}`, {
        type: 'DELETE'
    })
}

function updateUser() {
    let id = $('#updateId').val()

    $.ajax(`${URL}/${id}`, {
        method: 'PUT',
        data: {
            fullName: $('#updateName').val(),
            newAvatar: $('#updateAvatar').val(),
         }
    })
}

$('#updateForm').click(updateUser)