import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from './services/sw-api'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const location = useLocation()
  useEffect(()=> {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starshipTitle.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starshipTitle.url])
  return (
    <>
      <div>
        <h3>Starship Details</h3>
        <>
          <div>Name: {starshipDetails.name}</div>
          <div>Model: {starshipDetails.model}</div>
        </>
      </div>
    </>
  )
}

export default StarshipDetails