const qBank = [
  {
    question: 'What is your name',
    answers: ['Surabhi', 'Sunil', 'Suresh', 'Anil'],
    correct: 'Surabhi',
  },
  {
    question: 'Where city do you Live ?',
    answers: ['Hyderabad', 'Bengalru', 'Delhi', 'Chennai'],
    correct: 'Hyderabad',
  },
  {
    question: 'Who is your Best Friend',
    answers: ['Sathiya', 'Tulika', 'Sonam', 'Kartik'],
    correct: 'Tulika',
  },
  {
    question: 'Where does lion live?',
    answers: ['Air', 'Town', 'Forest', 'Water'],
    correct: 'Forest',
  },
  {
    question: 'What is world population ',
    answers: ['5.0 B', '12 B', '3.0 billion', '8.0 billion'],
    correct: '8.0 billion',
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
