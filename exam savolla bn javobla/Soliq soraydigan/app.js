let Oylik  = prompt ('Oyligiz qancha ')
let Soliq = 200 
if (Oylik === ''){
    alert('Oylikizni  kiriting')
    Oylik =parseInt(prompt('Oylik:'))

}
let Soliqbn  = prompt ('Soliq bilanmi ')
if (Soliqbn === ''){
    alert(' xa yoki yoq  kiriting')
    Soliqbn =parseInt(prompt('Soliq:'))
}

if (Soliqbn == 'ha'){
    result = ( Oylik * 12) - ( Soliq * 12 ) 
    console.log(result)
} else  {
    result = ( Oylik * 12 )
    console.log(result)
}









// yosh = parseInt(yosh)
// if(0 < yosh && yosh <= 30){
//     console.log('Yoshsiz')
// } else if (30 < yosh && yosh <= 60 ){
//     console.log('Kattasiz')
// } else if (yosh > 60 ){
//     console.log('qarisiz')
// }