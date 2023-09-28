const checkboxes = document.getElementsByClassName('myCheckbox');
const submit= document.getElementById('sub');
submit.addEventListener('click',()=>{
    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
               if(checkbox.checked){

                   console.log(checkbox.name)
               }
            else {
                checkbox.removeAttribute('name');
            }
    }
});
