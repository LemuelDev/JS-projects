const listInput = document.querySelector('#listInput');
const submitNameBtn = document.querySelector('#submitNameBtn');
const listresult = document.querySelector('.listresult');

let listarray = []


function todoList() {
    const listValue = listInput.value;
    
    let div = document.createElement('div');

    let list = document.createElement('p');
    list.innerHTML = listValue;
    list.classList.add('p')

    let deletebtn = document.createElement('button')
    deletebtn.innerText = 'Delete';
    deletebtn.classList.add('btn')
    div.appendChild(list)
    div.appendChild(deletebtn)
    listresult.appendChild(div)
    deletebtn.addEventListener('click', () => {
        div.remove();
       
    });

    listarray.push(listValue);
    console.log(listarray);

}

submitNameBtn.addEventListener('click', todoList)