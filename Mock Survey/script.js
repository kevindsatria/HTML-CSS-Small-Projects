function uncheckOthers(noneCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="clubs"]:not([value="None"])');
    if (noneCheckbox.checked) {
      checkboxes.forEach(checkbox => checkbox.checked = false);
    }
  }
  
  const checkboxes = document.querySelectorAll('input[name="clubs"]:not([value="None"])');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      document.getElementById('none').checked = false;
    });
  });
  