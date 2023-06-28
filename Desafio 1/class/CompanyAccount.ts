import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    private emprestimoStatus: boolean = false
    private emprestimoPendente: number = 0
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)

    }


    getLoan = (value: number): void => {

        if (this.status) {
            this.balance = this.balance + value
            this.emprestimoPendente = this.emprestimoPendente + value
            this.emprestimoStatus = true

            console.log(`Empréstimo efetuado no valor de R$ ${value}. Saldo atual: ${this.balance}.`)
        } else {
            console.log(`${this.validateStatus()}, você não pode fazer um empréstimo`)
        }
    }

    loanStatus = () => {
        if (this.emprestimoStatus && this.emprestimoPendente > 0) {
            console.log(`Você tem um empréstimo pendente no valor de: R$ ${this.emprestimoPendente}`)
        } else {
            this.emprestimoStatus = false
            console.log(`Você não tem um emprestimo pendente.`)
        }
    }

    payLoan = (value: number) => {
        if (this.status) {
            this.emprestimoPendente = this.emprestimoPendente - value
            this.balance = this.balance - value

            console.log(`Você fez um pagamento de R$ ${value} de um empréstimo pendente.`)
            if (this.emprestimoPendente > 0) {
                console.log(`Valor ainda pendente: R${this.emprestimoPendente}`)
            }
        } else if (this.emprestimoPendente = 0){
            this.emprestimoStatus = true
            console.log(`Você quitou seu empréstimo.`)
        } else if (value > this.emprestimoPendente || value > 0) {
            console.log(`Sua empréstimo pendente está no valor de R$ ${this.emprestimoPendente} e você tentou pagar R$ ${value}, logo, não podemos aceitar seu pagamento`)
        }
    }
}