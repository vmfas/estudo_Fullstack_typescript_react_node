import { DioAccount } from "./DioAccount"
export class PremiumAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    premiumDeposit = (value: number): void => {
        this.balance = this.balance + value + (value * 0.10)
        console.log(`Você fez um deposito premium no valor de R$ ${value} e teve um valor acrescido de ${value * 0.10}`)
    }
}