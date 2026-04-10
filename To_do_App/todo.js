let arr = [
    {
    item:'Buy Milk',
    dueDate:'2025-10-4'
    },
    {
    item:'Go to College',
    dueDate:'2025-10-4'
    }
];
display();
function add_list(){
    let input_element  = document.querySelector('#entry');
    let date_element=document.querySelector('#date');
    let todoitem = input_element.value;
    let tododate = date_element.value;
    arr.push({item:todoitem,dueDate:tododate});
    input_element.value='';
    date_element.value='';
    display();
}
function display(){
    let disp_item = document.querySelector('#to_do_container');
    let newHTML='';
    for(let i=0;i<arr.length;i++){
        let todoitem =  arr[i].item;
        let tododate = arr[i].dueDate;
        newHTML+=`
        <span>${todoitem}</span>
        <span>${tododate}</span>
        <button class="btn_delete" onclick="arr.splice(${i},1); display();">Delete</button>
        `;
    }
    disp_item.innerHTML=newHTML
}