import React, {useState} from 'react'
import TrivNightCat from './TrivNightCat'
import TrivNightList from './TrivNightList'
import TrivNightSearch from './TrivNightSearch'
import TrivNightDetailsCard from './TrivNightDetailsCard'

function TriviaNight () {
    const [catState, setCatState] = useState("0")
    const [amount, setAmount] = useState(10)
    const [questList, setQuestList] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState ("")
    
    const handleSearch = (value) => {
        setSearch(value)
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCatState(event.target.value)
    }    

    const fetchQuestionList = () => {

        fetch(`https://opentdb.com/api.php?amount=${amount}&category=${catState}`)
        .then(resp => resp.json())
        .then(data => setQuestList(data.results))
    }

    return (
        <div>
            <TrivNightSearch handleSearch={handleSearch} search={search}/>
            <TrivNightCat 
                catState={catState} 
                handleCategoryChange={handleCategoryChange} 
                fetchQuestionList={fetchQuestionList} 
                amount={amount} 
                handleAmountChange={handleAmountChange}
            />
            <TrivNightList 
                questList={questList.filter((question) => question.question.includes(search))}
                
            />
        </div>
    )
}

export default TriviaNight;