import { soma, multi } from './soma'

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multi o número por 2', () => {
        const value = multi(2)
        expect(value).toBe(4)
    })
})