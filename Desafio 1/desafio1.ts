import { CompanyAccount } from "./class/CompanyAccount"
import { DioAccount } from "./class/DioAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { PremiumAccount } from "./class/PremiumAccount"

const Vinicius: CompanyAccount = new CompanyAccount ( 'Vinicius Miguel', 4002)
console.log(Vinicius)
Vinicius.getBalance()

Vinicius.deposit(50)

Vinicius.withDraw(30)
Vinicius.withDraw(30)

Vinicius.getLoan(100)
Vinicius.loanStatus()
Vinicius.payLoan(100)
Vinicius.loanStatus()

const Miguel: PremiumAccount = new PremiumAccount ( 'Miguel', 3443)
console.log(Miguel)
Miguel.premiumDeposit(500)