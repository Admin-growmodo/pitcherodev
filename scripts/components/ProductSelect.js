import { component } from "picoapp"

export default component((node, ctx) => {
  let originalSelect = document.querySelector('#originalSelect[data-option-main]');
  let selectStyled = document.querySelector('.select-styled');
  let selectOptions = document.querySelector('.select-options');
  let selectOptionItems = document.querySelectorAll('.select-options li');

  function updateStyledSelect() {
    document.querySelector('[data-submit-bundle]').removeAttribute('disabled')
    originalSelect.options[originalSelect.selectedIndex];
  }

  selectStyled.addEventListener('click', function() {
      selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(e) {
      if (!selectStyled.contains(e.target)) {
          selectOptions.style.display = 'none';
      }
  });

  selectOptionItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
          var value = originalSelect.options[index].value;
          selectStyled.textContent = item.textContent;
          selectOptions.style.display = 'none';

          originalSelect.value = value;

          updateStyledSelect();
      });
  });

  originalSelect.addEventListener('change', function() {
      updateStyledSelect();
  });
})