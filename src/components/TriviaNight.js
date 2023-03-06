import React, {useState} from 'react'
import TrivNightCat from './TrivNightCat'
import TrivNightList from './TrivNightList'

function TriviaNight () {
    const [catState, setCatState] = useState("0")
    const [questList, setQuestList] = useState([])


    const handleCategoryChange = (event) => {
        setCatState(event.target.value)
    }

    const fetchQuestionList = (value) => {

        fetch(`https://opentdb.com/api.php?amount=10&category=${catState}`)
        .then(resp => resp.json())
        .then(data => setQuestList(data.results))
    }

    return (
        <div>
            <TrivNightCat catState={catState} handleCategoryChange={handleCategoryChange} fetchQuestionList={fetchQuestionList}/>
            <TrivNightList questList={questList}/>
        </div>
    )
}

export default TriviaNight;