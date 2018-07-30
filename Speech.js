
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //������ ���������� �� �� ���������� ������ �� API
if (!window.SpeechRecognition) {
    alert('Your browser has no access to the speech-to-text API');
}
var recognition = new SpeechRecognition();//��������� ��'��� SpeechRecognition
recognition.interimResults = true; //������� �� ������ ����������� ������ ����������

recognition.lang = 'en-EN';

var paragraph = document.createElement('p');//������� ����� ������� <p>
var words = document.querySelector('.words');
words.appendChild(paragraph);
recognition.addEventListener('result', e => {
    var transcript = Array.from(e.results)
        .map(result => result[0])//����� map() ������� ����� ����� � ������������ ������� ������� �� ������� ������� ������
        .map(result => result.transcript)
        .join(''); //��'���� �� �������� ������ � �����
    paragraph.textContent = transcript;
    if (e.results[0].isFinal) {
        paragraph = document.createElement('p');
        words.appendChild(paragraph);
    }
    
});
recognition.addEventListener('end', recognition.start);
recognition.start();