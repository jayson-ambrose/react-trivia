import React, {useEffect, useState} from 'react'
import Trivia from './Trivia.js'
import SectionTwo from './SectionTwo.js'
import SectionThree from './SectionThree.js'

function NavBar ({ activeProfile }) {

    const [fetchUrl, setFetchUrl] = useState("https://opentdb.com/api.php?amount=5")
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(fetchUrl)
        .then(resp => resp.json())
        .then(data => setQuestions(data.results))
    }, [])
    
    return (
        <div>
            <Trivia questions={questions}/>
            {/* <SectionTwo/>
            <SectionThree/> */}
        </div>
    )
}

export default NavBar;