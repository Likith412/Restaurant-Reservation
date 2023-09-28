const checkboxes = document.getElementsByClassName('myCheckbox');
        
for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    
    checkbox.addEventListener('change', function () {
        if (!checkbox.checked) {
            checkbox.removeAttribute('name');
        }
    });
}