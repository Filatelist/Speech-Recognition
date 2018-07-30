
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //спершу перевіряємо чи має користувач доступ до API
if (!window.SpeechRecognition) {
    alert('Your browser has no access to the speech-to-text API');
}
var recognition = new SpeechRecognition();//створюємо об'єкт SpeechRecognition
recognition.interimResults = true; //визначає чи повинні повертатися проміжні результати

recognition.lang = 'en-EN';//визначення мови

var paragraph = document.createElement('p');//створює новий елемент <p>
var words = document.querySelector('.words');//повертає не всі а лише перший відповідний css-селектору
words.appendChild(paragraph); //додаємо всередину елемента words paragraph
recognition.addEventListener('result', e => {
    var transcript = Array.from(e.results)
    transcript.map((function (result) {
        return result[0];
    })()) //метод map() створює новий масив з результатами виклику функції на кожному елементі масиву
    transcript.map((function (result) {
        return result.transcript
    })())
    transcript.join(''); //об'єднує всі елементи масиву в рядок
    paragraph.textContent = transcript;
    if (e.results[0].isFinal) {
        paragraph = document.createElement('p');
        words.appendChild(paragraph);
    }
    
});
recognition.addEventListener('end', recognition.start);
recognition.start();