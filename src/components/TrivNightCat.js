import React, {useState, useEffect} from "react";

function TrivNightCat({ 
    handleCategoryChange, 
    fetchQuestionList, 
    handleAmountChange 
}) {

  const [categories, setCategories] = useState([])
  const categoriesUrl = "https://opentdb.com/api_category.php"

  useEffect(() => {
    fetch(categoriesUrl)
    .then(resp => resp.json())
    .then(data => setCategories(data.trivia_categories))
  }, [])

  const optionList = categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuestionList();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select className="ms-3 p-2" onChange={handleCategoryChange}>
        {optionList}
      </select>
      <select className="ms-3 p-2" onChange={handleAmountChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <button
        className="ms-3 p-2"
        style={{ backgroundColor: "#03e9f4" }}
        type="submit"
        
      >
        Go!
      </button>
    </form>
  );
}

export default TrivNightCat;
