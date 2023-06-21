// parte 1
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

// Parte 2
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

    const arrayString: Array<string> =[
        '1', '2', '3'
    ]

    const arrayString2: string[] =[
        '1', '2', '3'
    ]

    const arrayAny: any[] =[
        'Vinicius', 2, false
    ]
}