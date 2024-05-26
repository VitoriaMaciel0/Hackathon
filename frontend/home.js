document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.faq-question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;

            // Toggle the answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});