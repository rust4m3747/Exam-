let yosh = prompt ('Yoshingiz')
if (yosh === ''){
    alert('Yoshingizni kiriting')
    yosh =parseInt(prompt('YOSHINGIZ:'))
}

yosh = parseInt(yosh)
if(0 < yosh && yosh <= 30){
    console.log('Yoshsiz')
} else if (30 < yosh && yosh <= 60 ){
    console.log('Kattasiz')
} else if (yosh > 60 ){
    console.log('qarisiz')
}
