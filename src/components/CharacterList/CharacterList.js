import React from "react";
import "../CharacterList/CharacterList.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import ButtonPage from "../ButtonPage/ButtonPage";

const API_URL = "https://api.disneyapi.dev/character?page=";

const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();
  React.useEffect(() => {
    fetch(API_URL + currentPage)
      .then((response) => response.json())
      .then((data) => {
        console.log("Personajes", data.data);
        console.log("data", data);
        setCharacterList(data.data);
      });
  }, [currentPage]);

  const goBack = () => {
    if (currentPage === 1) {
      alert("Ya estás en la primera página");
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage !== 149) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("Ya estás en la última página");
    }
  };

  return (
    <div className="character">
      <div>
        <ButtonPage
            previousPage={() => goBack()}
            text={currentPage}
            nextPage={() => goNext()}
        />
      </div>
      <div className="character-list">
        {characterList.map((character) => {
        return (
          <CharacterCard
                key={character._id}
                image={character.imageUrl}
                name={character.name}
          />
        );
      })}
      </div>
        
    </div>
  );
};
export default CharacterList;
