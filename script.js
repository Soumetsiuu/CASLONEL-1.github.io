function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchResults");
    li = ul.getElementsByTagName('li');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
    card.addEventListener('click', () => {
    // Logic to show a modal or fullscreen image here
    // (You might use libraries like Lightbox.js)
    // Optionally, transition to the next card using logic here
  });
});

   const cardContainer = document.querySelector('.card-container');
   const cards = cardContainer.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(otherCard => otherCard.classList.remove('active')); // Deactivate other cards
    card.classList.add('active'); // Activate clicked card
  });
});
    
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "Sm grand central";
        
      } else {
        li[i].style.display = "none";
      }
    }
  }
