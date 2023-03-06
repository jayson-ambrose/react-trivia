import React from 'react'

function TrivNightCat ({handleCategoryChange, catState, fetchQuestionList}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        fetchQuestionList(catState)        
    }

    return (
        <form onSubmit={handleSubmit}>
            <select onChange={handleCategoryChange}>
                <option value="0">Select Category...</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                <option value="11">Film</option>
                <option value="12">Music</option>
                <option value="13">Musicals/Theater</option>
                <option value="14">Television</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
                <option value="17">Nature</option>
                <option value="18">Computers</option>
                <option value="19">Math</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
                <option value="30">Gadgets</option>
                <option value="31">Anime/Manga</option>
                <option value="32">Cartoons/Animation</option>
            </select>
            <button type="submit" >Go!</button>
        </form>
    )
}

export default TrivNightCat;