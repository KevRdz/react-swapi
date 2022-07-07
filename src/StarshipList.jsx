import { useState, useEffect } from "react";
import {getStarshipList} from './services/sw-api'
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const fetchStarshipList = async () => {
      const StarshipData = await getStarshipList()
      setStarships(StarshipData.results)
    }
    fetchStarshipList()
  }, [])
  return (
    <>
      <div>
        <h3>Starship List</h3>
        <div>
          {starships.map(starshipTitle =>
            <div className="class-div" key={starshipTitle.index}>
              <Link to="/details" state={{starshipTitle}}>
              {starshipTitle.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    
    </>
  )
}

export default StarshipList