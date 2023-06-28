import { DioAccount } from "./DioAccount"
export class PeopleAccount extends DioAccount {
    doc_id: number

    constructor(doc_id: any, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}