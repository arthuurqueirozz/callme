const form = document.getElementById('form')
const invalidAlert = document.getElementById('invalid-input')

let phoneNumbers = []

form.addEventListener('submit', (e) => {
    const numberContact = document.getElementById('number-contact')
    const nameContact = document.getElementById('name-contact')

    e.preventDefault()

    
    if (phoneNumbers.includes(parseInt(numberContact.value))) {

        invalidAlert.style.display = 'inline'
        numberContact.classList.add('border-invalid')

    }else{
        invalidAlert.style.display = 'none'
        numberContact.classList.remove('border-invalid')
        phoneNumbers.push(parseInt(numberContact.value))


        let lines = '<tr>'
        lines += `<td>${nameContact.value}</td>`
        lines += `<td>${numberContact.value}</td>`
        lines+='</tr>'

        

        let table = document.querySelector('tbody')
        table.innerHTML += lines
    }
   
    
}) 