function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;
            case 'multipleChoice':
                question.opinions.forEach((opinion, index) => {
                    console.log(`${index + 1}. ${opinion}`)
                })
                break;
            case 'text':
                console.log('Answer: _______________________')
            case 'range':
                console.log('Minimum: _______________________');
                console.log('Maximum: _______________________')
            default:
                console.log('')
                break;
        }
    });
}


const questions = [
    {
        type: 'boolean',
        description: 'This video is usefull'
    },
    {
        type: 'multipleChoice',
        description: 'This video is usefull',
        opinions: ['CSS', "HTML", "JS", "C#"]
    },
    {
        type: 'text',
        description: 'Describe your favorite JS feature.'
    },
    {
        type: 'range',
        description: 'What is the speed limit in your city.'
    }
]

printQuiz(questions)