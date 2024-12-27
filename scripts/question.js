
const baseUrl = 'https://sleepy-supreme-sleet.glitch.me';
function loadReviewedQuestions() {
    fetch(baseUrl)
        .then(res=> res.json())
        .then(data => {
            const container = document.getElementById('reviewedQuestionsContainer');
            container.innerHTML = '';
            data.filter(question => question.reviewStatus).forEach(question => {
                const card = document.createElement('div');
                //card.style.border = '1px solid violet';*/
                card.innerHTML = `
              <h3>${question.title}</h3>
               <p>A: ${question.optionA}</p> 
               <p>B: ${question.optionB}</p> 
               <p>C: ${question.optionC}</p> 
               <p>D: ${question.optionD}</p> `;
                container.appendChild(card);
            });
        });
}
loadReviewedQuestions();
