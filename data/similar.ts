interface IsentenceType {
  sentence: string;
  answer: string;
}
interface ISimilarWord {
  sentences: IsentenceType[];
  answers: string[];
}

type similarWordsType = ISimilarWord[];

export const similarWords: similarWordsType = [
  {
    sentences: [
      {sentence: 'We passed _ the forest', answer: 'through'},
      {sentence: 'He is stupid, I like him _', answer: 'Though'},
      {sentence: 'Wrestler girl is _', answer: 'Tough'},
    ],
    answers: ['through', 'Tough', 'Though'],
  },
  {
    sentences: [
      {sentence: 'Which runner won the _ this afternoon?.', answer: 'Race'},
      {
        sentence: 'If you want some ice create, _ your hand now',
        answer: 'Raise',
      },
    ],
    answers: ['Race', 'Raise'],
  },

  {
    sentences: [
      {
        sentence: 'I hope this tree will _ more apples next year.',
        answer: 'Bear',
      },
      {
        sentence:
          'When I opened the door, his dog ran up and started to _ its teeth at me.',
        answer: 'Bare',
      },
    ],
    answers: ['Bear', 'Bare'],
  },

  {
    sentences: [
      {
        sentence:
          'If you had to go to the _ for three days, how much water would you bring?',
        answer: 'Desert',
      },
      {
        sentence: 'Maybe we should have chocolate ice cream for _.',
        answer: 'Dessert',
      },
    ],
    answers: ['Desert', 'Dessert'],
  },

  {
    sentences: [
      {
        sentence: 'Please don"t _ those expensive Italian vases.',
        answer: 'Break',
      },
      {
        sentence:
          'You should _ your car when you see someone crossing the street.',
        answer: 'Brake',
      },
    ],
    answers: ['Break', 'Brake'],
  },

  {
    sentences: [
      {
        sentence: 'I didn’t buy it because the _ was too high.',
        answer: 'Price',
      },
      {
        sentence: 'If you want to win the first _, you must practice harder.',
        answer: 'Prize',
      },
    ],
    answers: ['Price', 'Prize'],
  },

  {
    sentences: [
      {
        sentence:
          'Please don’t _ these keys or you won’t be able to get into the apartment.',
        answer: 'Lose',
      },
      {
        sentence:
          'She"s much thinner now and her clothes have become far too _ for her.',
        answer: 'Loose',
      },
    ],
    answers: ['Lose', 'Loose'],
  },
];
