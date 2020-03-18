import React, { useState } from 'react';
import './TrivialForm.scss';

export const TrivialForm = function (props) {

    const [formInfo, setFormInfo] = useState({numberOfQuestions: 10, difficulty: 0, category: 0});

    const onChangeSetInfo = ($event) => {
        setFormInfo({...formInfo, [$event.target.name]: $event.target.value})
    };

    return (
        <form onSubmit={e => { e.preventDefault(); }}>
            <label htmlFor="numberOfQuestions">Number of Questions</label>
            <input id="numberOfQuestions" name="numberOfQuestions" type="number" value={formInfo.numberOfQuestions} onChange={onChangeSetInfo}/>


            <label htmlFor="difficulty">Select Difficulty</label>
            <select name="difficulty" id="difficulty" onChange={onChangeSetInfo} value={formInfo.difficulty}>
                {difficulties.map(difficulty => {
                    return <option value={difficulty.value}>{difficulty.label}</option>
                })}
            </select>

            <label htmlFor="category">Select Category</label>
            <select name="category" id="category" onChange={onChangeSetInfo} value={formInfo.category}>
                {categories.map(category => {
                    return <option value={category.value}>{category.label}</option>
                })}
            </select>
            <button onClick={ () => startGame(formInfo, props.getQuestionsFn)}>Start Game!</button>
        </form>
    )
};



const startGame = (formInfo, getQuestionsFn) => {
    const urlToCall = createUrlToGetQuestions(formInfo);
    getQuestionsFn(urlToCall);
};

const createUrlToGetQuestions = (formInfo) => {
    return `https://opentdb.com/api.php?amount=${formInfo.numberOfQuestions}${formInfo.difficulty ? '&difficulty=' + formInfo.difficulty : ''}${formInfo.category ? '&category=' + formInfo.category : ''}`;
};

const difficulties = [
    {value: 0, label: 'Any' },
    {value: 'easy', label: 'Easy' },
    {value: 'medium', label: ' Medium' },
    {value: 'hard', label: 'Hard' },
];

const categories = [
    {value: 0, label: 'Any'},
    {value: 9, label: 'General Knowledge'},
    {value: 10, label: 'Entertainment: Books'},
    {value: 11, label: 'Entertainment: Film'},
    {value: 12, label: 'Entertainment: Music'},
    {value: 13, label: 'Entertainment: Music Theatres'},
    {value: 14, label: 'Entertainment: Television'},
    {value: 15, label: 'Entertainment: Video Games'},
    {value: 16, label: 'Entertainment: Board Games'},
    {value: 17, label: 'Science: Nature'},
    {value: 18, label: 'Science: Computers'},
    {value: 19, label: 'Science: Mathematics'},
    {value: 20, label: 'Mythology'},
    {value: 21, label: 'Sports'},
    {value: 22, label: 'Geography'},
    {value: 23, label: 'History'},
    {value: 24, label: 'Politics'},
    {value: 25, label: 'Art'},
    {value: 26, label: 'Celebrities'},
    {value: 27, label: 'Animals'},
    {value: 28, label: 'Vehicles'},
    {value: 29, label: 'Entertainment: Comics'},
    {value: 30, label: 'Science: Gadgets'},
    {value: 31, label: 'Entertainment: Japanese Anime Manga'},
    {value: 32, label: 'Entertainment: Cartoon Animations'},
];

