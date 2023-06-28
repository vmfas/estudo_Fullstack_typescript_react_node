export abstract class DioAccount {
    private name: string
    readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => { // void = retorno
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Você depositou')
        }

    }
    withDraw = (): void => { console.log('Você sacou') }
    getBalance = (): void => { console.log(this.balance) }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error()

    }
}