class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.opinions = options
    }

    printQuestionChoices() {
        this.opinions.forEach((opinion, index) => {
            console.log(`${index + 1}. ${opinion}`)
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer: _______________________')
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Minimum: _______________________');
        console.log('Maximum: _______________________')
    }
}

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log("\n");
    });
}


const questions = [
    new BooleanQuestion("This video is usefull"),
    new MultipleChoiceQuestion(
        "This video is usefull",
        ['CSS', "HTML", "JS", "C#"]),
    new TextQuestion("Describe your favorite JS feature."),
    new RangeQuestion("What is the speed limit in your city.")
]

printQuiz(questions)