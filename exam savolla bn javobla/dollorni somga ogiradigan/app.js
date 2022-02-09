let option = document.getElementById('name')
let summa = parseInt(document.getElementById('summa').value)

function Convert() {
  if (option == 'dollar') {
    // sumda qatishi kerak
    let result = summa / 10860
    console.log(result)
  } else {
    let result = summa * 10860
    console.log(result)
  }
}