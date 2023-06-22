export const quiz = {
  totalQuestions: 10,
  questions: [
    {
      id: 1,
      question: "Какая технология используется для разработки Web приложений?",
      answers: ["HTML", "JavaScript", "Python", "React"],
      correctAnswer: "HTML",
    },
    {
      id: 2,
      question:
        "Как называется язык программирования с открытым исходным кодом?",
      answers: ["Java", "Python", "C++", "PHP"],
      correctAnswer: "Python",
    },
    {
      id: 3,
      question: "Как в JavaScript можно перезаписать значение переменной?",
      answers: ["=", "==", "===", "!="],
      correctAnswer: "=",
    },
    {
      id: 4,
      question:
        "Какой язык программирования используется для разработки приложений на iOS?",
      answers: ["Swift", "Objective-C", "JavaScript", "Python"],
      correctAnswer: "Swift",
    },
    {
      id: 5,
      question: "Какая команда используется для создания массива в JavaScript?",
      answers: [
        "new Array(n)",
        "new Array([1, 2, 3])",
        "new Array()",
        "Array.from(iterable)",
      ],
      correctAnswer: "new Array()",
    },
    {
      id: 6,
      question: "Какая функция используется для получения значения из строки?",
      answers: ["parseInt", "parseFloat", "parseDate", "parseBool"],
      correctAnswer: "parseInt",
    },
    {
      id: 7,
      question:
        "Какая функция используется в JavaScript для преобразования числа в строку?",
      answers: ["toFixed", "toPrecision", "parseInt", "toString"],
      correctAnswer: "toString",
    },
    {
      id: 8,
      question:
        "Какая команду используется для выполнения кода при нажатии на кнопку?",
      answers: [
        "document.querySelector('#button').addEventListener('click', function() { });",
        "document.querySelector('#button').onclick = function() { };",
        "document.querySelector('#button').addEventListener('click', (event) => { });",
        "document.querySelector('#button').onclick = (event) => { };",
      ],
      correctAnswer: [
        "document.querySelector('#button').onclick = function() { };",
      ],
    },
    {
      id: 9,
      question:
        "Какая команда используется для добавления флага 'new' к объекту?",
      answers: [
        "[object Object].constructor",
        "{}.constructor",
        "new Object()",
        "new {}",
      ],
      correctAnswer: ["new Object()"],
    },
    {
      id: 10,
      question: "Какую операцию выполняет функция slice в JavaScript?",
      answers: [
        "удаляет элемент из начала массива",
        "удаляет элемент из конца массива",
        "удаляет элемент из массива по индексу",
        "удаляет элемент из массива по показателю",
      ],
      correctAnswer: ["удаляет элемент из начала массива"],
    },
  ],
};
