function cloneField(){
    const scheduleItem = document.querySelector('.schedule-item').cloneNode(true)
    const fields = scheduleItem.querySelectorAll('input')
    fields.forEach(field => {
        field.value = ''
    })
    document.querySelector('#schedule-items').appendChild(scheduleItem)
    console.log(scheduleItem)
}

document.querySelector('#add-time').addEventListener('click', cloneField)
