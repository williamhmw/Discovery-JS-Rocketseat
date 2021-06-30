
// Aqui eu tenho um comentário em linha

/*
Aqui eu tenho um comentário multi linha (comentário de bloco)
 O código abaixo escreve alguma mensagem no console no dvtools

 */
 console.log('Bem vindos')  // comentário em linha - Alt + Z para quebrar linha no VSCode

 //String pode ser escrita com "", '', ``(aceita multilinha)
 console.log('William')
 console.log(`William ${1+1}`) // Isso se chama interpolação
 console.log(1+1)

 //number
 /* 
 NoN // Not a number
 Infinity // infinito
 */
 console.log(-33)
 console.log(Infinity)
 console.log(25.6 / "William")

/*
Booleon
somente 2 valores
true = verdadeiro
false = falso

*/
console.log(false)

/*
undefined = indefinido
null = nulo
    não possui nada dentro
    diferente de indefinido
*/
console.log(undefined)
console.log(null)
console.log(null === undefined)

/*
Object = objeto
    propriedade / atributos
    funcionalidades / métodos
    { propriedade: "valor" }
*/
console.log({
    name: "William",
    idade: 25,
    andar: function(){
        console.log("Andar")
    }
})

/*
Array = Vetores
* Uma lista
* Agrupamento de dados
*/
console.log([
    "William", 
    25,
    "Leite",
    "Ovos"
])