const teclas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('#tecla').forEach(function(tecla){
    tecla.addEventListener('click', function(){
        const value = tecla.dataset.value
        input.value += value
    })
})

document.querySelector('.opclear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

let input = document.querySelector('.resultado')

input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if(teclas.includes(ev.key)){
        input.value += ev.key
        return
    }

    if(ev.key == 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(ev.key == 'Enter'){
        calculate()
    }
    // console.log(ev.key)
});

document.querySelector('.opigual').addEventListener('click', calculate)

function calculate(){
    console.log(input.value)
    const result = eval(input.value)
    input.value = result
}