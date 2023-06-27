import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

// parte 1 (Variáveis e tipos)
console.log('Parte 1')
console.log('.')
console.log('.')
{
    let b: string = 'b'
    const c = 'c'

    let n: number = 2
    let x: boolean = true

    let m: string | number | boolean = 2
    let abacate: any = 7 // any = qualquer coisa
    m = 'Vinicius'
    m = false

    const pessoa = {
        nome: 'Vinicius',
        idade: 21
    }
}

// Parte 2 (Objetos e interfaces)
console.log('Parte 2')
console.log('.')
console.log('.')
{
    interface Pessoa {
        nome: string,
        idade: number,
        profissao?: string // Transformando uma propriedade em opcional
        // Outra opção seria: profissao: string || undefined (melhor priorizar a outra forma)
    }

    const Pessoa: Pessoa = {
        nome: 'Vinicius',
        idade: 21
    }

    const outraPessoa: Pessoa = {
        nome: 'Miguel',
        idade: 21,
        profissao: 'Desenvolvedor'
    }

    const arrayPessoa: Array<Pessoa> = [
        Pessoa,
        outraPessoa
    ]

    const arrayNum: number[] = [
        1, 2, 3
    ]

    const arrayString: Array<string> = [
        '1', '2', '3'
    ]

    const arrayString2: string[] = [
        '1', '2', '3'
    ]

    const arrayAny: any[] = [
        'Vinicius', 2, false
    ]
}

//Parte 3 (Decisões e repetições)
console.log('Parte 3')
console.log('.')
console.log('.')
{
    const num: number = 16

    if (num > 15) {
        console.log('Num maior que 15')
    } else if (num === 15) {
        console.log('Num igual a 15')
    } else {
        console.log('Num nemor que 15')
    }

    const typeUser = {
        admin: 'Seja bem vindo admin',
        student: 'Você é um estudante',
        viewer: 'Você pode visualizar'
    }

    function validateUser(user: string) {
        console.log(typeUser[user as keyof typeof typeUser])
    }

    const usuario = 'admin'

    validateUser(usuario)
    validateUser('student')
    validateUser('viewer')
}

// Parte 4 (Estruturas de Repetição)
console.log('Parte 4')
console.log('.')
console.log('.')
{
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }

    let n = 2
    while (n < 6) {
        console.log(n)
        n++
    }
}

// Parte 5 (Array)
console.log('Parte 5')
console.log('.')
console.log('.')
{
    const array: Array<number> = [1, 2, 3, 4]
    const stringArray: string[] = ['a', 'b', 'c']
    console.log(array[0])
    console.log(stringArray[0])
    console.log(stringArray.length)
    console.log('array original', array)
    array.push(5)
    console.log('array com novo elemento', array)
    array.pop()
    console.log('array sem o novo elemento', array)
}
// Parte 6 (Manipulando Arrays)
console.log('Parte 6')
console.log('.')
console.log('.')
{
    const array: Array<number> = [1, 2, 3, 4]

    const buscaNum = array.find(num => num > 2) // retorna o primeiro valor que cumpre a condição
    console.log(buscaNum)

    console.log(array)
    array.forEach(num => console.log(num))

    array.forEach(num => {
        if (num > 2 && num % 2 === 0) {
            console.log(num * 2)
        }
    })

    array.map(num => console.log(num))
}

// Parte 7 (Poo)
console.log('Parte 7')
console.log('.')
console.log('.')
{
    const user = {
        name: 'Vinicius',
        age: 21,
        showName() {
            console.log(this.name)
        }
    }
    user.showName()

    const otherUser = {
        name: 'Miguel',
        age: 21,
        showName() {
            console.log(this.name)
        }
    }
    otherUser.showName()

    class usuario {
        name: string = 'Vinicius'
        age: number = 21

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        showName = () => { console.log(this.name, this.age) }
    }

    const vini = new usuario('Vinicin bala tensa', 21)
    vini.showName()

    const mig = new usuario('Miguelzin bala tensa', 21)
    mig.showName()

}

// Parte 8 (Classes e tipos)
console.log('Parte 8')
console.log('.')
console.log('.')
{
    //Dio Banking

    // Name, accountNumber
    // depositar, sacar

    class Account {
        name: string
        accountNumber: number

        constructor(name: string, accountNumber: number) {
            this.name = name
            this.accountNumber = accountNumber
        }

        deposit = () => { console.log('Você depositou') }
        withDraw = () => { console.log('Você sacou') }
    }

    class Admin extends Account {
        balance: number

        constructor(name: string, accountNumber: number) {
            super(name, accountNumber)
            this.balance = 20
        }

        getBalance = () => { console.log(this.balance) }
    }
    const adminAccount: Admin = new Admin('Vinicius', 21)
    console.log(adminAccount)

    const account: Account = new Account('Miguel', 21)
    console.log(account)
}

// Parte 9 (Complemento da parte 8)
console.log('Parte 9')
console.log('.')
console.log('.')
{
    //Dio Banking

    // Name, accountNumber
    // depositar, sacar
    // Import no topLevel

    const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Vinicius', 10)
    peopleAccount.deposit()
    console.log(peopleAccount)
    peopleAccount.setName('Abacate')
    console.log(peopleAccount)

    console.log(peopleAccount.getName())

    peopleAccount.deposit()
    const companyAccount: CompanyAccount = new CompanyAccount('Miguel', 21)
    companyAccount.deposit()
   // companyAccount.accountNumber = 11 (não pode ser reescrito por causa do readonly)
}