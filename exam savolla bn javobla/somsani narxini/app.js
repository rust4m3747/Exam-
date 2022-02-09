let Somsa = prompt ('Somsaning narxi ')
if (Somsa === ''){
    alert('Narxni kiriting')
    Somsa =parseInt(prompt('Narxi'))
}

Somsa = parseInt(Somsa)
if(0 < Somsa && Somsa <= 3000){
    console.log('Arzon')
} else if (3000 < Somsa && Somsa <= 6000 ){
    console.log('Qimat')}