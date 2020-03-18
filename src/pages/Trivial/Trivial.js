import React, { useState } from 'react';
import './Trivial.scss';
import { TrivialForm } from "./components/TrivialForm/TrivialForm";
import axios from 'axios';
import { TrivialQuestions } from "./components/TrivialQuestions/TrivialQuestions";
import TrivialContext from '../../shared/contexts/TrivialContext'

export const Trivial = function () {
    const [questions, setQuestions] = useState([]);

    const getQuestions = (urlToCall) => {
        axios.get(urlToCall).then(res => {
            if(res.data.response_code === 0){
                setQuestions(res.data.results);
            }
        })
    };

    return (
        <div className="b-counter-with-hooks">
        <TrivialContext.Provider value={questions}>
                   <TrivialForm getQuestionsFn={getQuestions}/>
                   <TrivialQuestions questions={questions}/>
        </TrivialContext.Provider>
        </div>
    )
};

