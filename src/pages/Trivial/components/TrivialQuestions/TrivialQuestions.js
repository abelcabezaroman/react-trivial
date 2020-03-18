import React, { useContext, useState } from 'react';
import './TrivialQuestions.scss';
import TrivialContext from "../../../../shared/contexts/TrivialContext";

export const TrivialQuestions = function () {

    const questions = useContext(TrivialContext);
    return (
        <div>
            {questions.map(question => {
                return <div>
                    <h2>{question.question}</h2>
                    {createQuestions(question)}
                    </div>
            })}
        </div>
    )
};
//
// function utf8Decode(utf8String) {
//     if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
//     // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
//     const unicodeString = utf8String.replace(
//         /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
//         function(c) {  // (note parentheses for precedence)
//             var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
//             return String.fromCharCode(cc); }
//     ).replace(
//         /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
//         function(c) {  // (note parentheses for precedence)
//             var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
//             return String.fromCharCode(cc); }
//     );
//     return unicodeString;
// }

const createQuestions = (question) => {
    const maxAnswers = question.incorrect_answers.length;
    const randomNumber = Math.floor(Math.random() * maxAnswers);
    let answersList = [];

    for (let i = 0; i < maxAnswers; i++) {
        if (i === randomNumber) {
            answersList.push(<button onClick={() => selectAnswer(true)}>{question.correct_answer}</button>)
        }
        answersList.push(<button onClick={() => selectAnswer(false)}>{question.incorrect_answers[i]}</button>)
    }

    return answersList;
};

const selectAnswer = (flagIsCorrect) => {
    alert('respuesta' + flagIsCorrect)
};
