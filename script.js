var data = new Date()
var ano;
var niver;
var m = Number(prompt('Month of birth:')) - 1
var d = Number(prompt('Day of birth:'))

var text = document.getElementById('container')
var text2 = document.getElementById('container2')


if(data.getMonth() <= m) {
   ano = Number(data.getFullYear())
   niver = new Date(ano, m, d)
} else {
   ano = Number(data.getFullYear()) + 1
   niver = new Date(ano, m, d)


}


var conta = Math.abs(data.getTime() - niver.getTime())
var contaFinal = (Math.ceil(conta / 86400000))


text2.innerHTML = Math.floor(contaFinal / 30) + ' Months and ' + (contaFinal % 30) + ' Days'
text.innerHTML = contaFinal + ' Days or: '