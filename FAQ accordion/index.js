let vals = {}
let showingId = null;

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.faq-div');
    elements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        let clickedElement = event.currentTarget;
        let id = clickedElement.id;
        if(showingId !== null ) {
            let prevElement = document.querySelector("#" + showingId);
            let img2 = prevElement.querySelector(".expand-img");
            let answer2 = prevElement.querySelector(".answer-div");
            answer2.classList.toggle('active');
            img2.src = "assets/images/icon-plus.svg";
            answer2.style.display = 'none';
        }

        if(showingId === id) {
            showingId = null;
        } else {
            let img = clickedElement.querySelector(".expand-img");
            let answer = clickedElement.querySelector(".answer-div");
            answer.classList.toggle('active');
            img.src = "assets/images/icon-minus.svg";
            answer.style.display = 'block';
            showingId = id;
        }
      });
    });
  });