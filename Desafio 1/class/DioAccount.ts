export abstract class DioAccount {
    readonly name: string
    readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance = this.balance + value
            console.log(`Depósito efetuado! Você depositou R$ ${value}, seu saldo atual é: R$ ${this.balance}`)
        } else {
            console.log(`${this.validateStatus()}`)
        }

    }
    withDraw = (value: number): void => {
        if (this.validateStatus() && this.balance > value) {
            this.balance = this.balance - value
            console.log(`Saque efetuado! Você sacou R$ ${value}, seu saldo atual é: R$ ${this.balance}`)
        } else if (this.validateStatus() !== true) {
            console.log(`${this.validateStatus()}`)
        } else if (this.balance < value) {
            console.log(`Saldo insuficiente para realizar o saque. Valor da tentativa de saque R$ ${value}, saldo atual da conta R$ ${this.balance}`)
        }
    }

    getBalance = (): void => {
        if (this.validateStatus()) {
            console.log(`Seu saldo atual é: R$ ${this.balance}`)
        } else {
            console.log(`${this.validateStatus()}`)
        }

    }

    validateStatus = (): any => {
        if (this.status) {
            console.log(`Sua conta está ativa.`)
        } else {
            console.log(`Sua conta está desativada.`)
        }
    }

    deactivateAccount = () => {
        if (this.status) {
            this.status = false
            console.log(`${this.name} sua conta foi desativada.`)
        } else if (this.status === false) {
            console.log(`${this.name} sua conta já está desativada.`)
        }
    }

    acticateAccount = () => {
        if (this.status === false) {
            this.status = true
            console.log(`${this.name} sua conta foi ativada.`)
        } else if (this.status) {
            console.log(`${this.name} sua conta já está ativa.`)
        }
    }
}