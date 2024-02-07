const steps = Array.from(document.querySelectorAll('form .step')) 
const nextBtn = document.querySelectorAll('form .next-btn')
const prevBtn = document.querySelectorAll('form .previos-btn')
const endBtn = document.querySelectorAll('form .end-btn')
const form = document.querySelector('form')

nextBtn.forEach(button=>{
    button.addEventListener('click', () => {
        changeStep('next')
    })
})

prevBtn.forEach(button=>{
    button.addEventListener('click', () => {
        changeStep('prev')
    })
})

function changeStep(btn){
    let index = 0
    const active = document.querySelector('form .step.active')
    index = steps.indexOf(active)
    steps[index].classList.remove('active')
    if(btn === 'next'){
        index ++
    } else if(btn === 'prev'){
        index --
    }
    steps[index].classList.add('active')
    console.log(index)
}

const inputElement = document.getElementById('DuckName')
const buttonCreate = document.getElementById('create')
const stepElement = document.getElementById('step-4')

console.log

buttonCreate.onclick = function () {
    stepElement.innerHTML = `<div class="form-group">
    <label for="OneLabel">Что такое утка</label>
    <span>${inputElement.value}</span>
    <div class="form-group">
    <label for="OneLabel">Где они обитают</label> 
    <span></span>
    <div class="form-group">
    <label for="OneLabel">Когда стоит покупать зимную куртку</label> 
    <span></span>
    <div class="form-group">
    <label for="OneLabel">Что такое покупка</label> 
    <span></span>
    <div class="form-group">
    <label for="OneLabel">Я ничего не придумал</label> 
    <span></span>
    <div class="form-group">
    <label for="OneLabel">Какие ананасы ты любишь</label> 
    <span></span>
    </div>`
}