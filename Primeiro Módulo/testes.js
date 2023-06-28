const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validateUser(user) {
    console.log(typeUser[user])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')