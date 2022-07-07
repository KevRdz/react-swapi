import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from './services/sw-api'
import { Link } from 'react-router-dom'

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
      <div className='details'>
        <h3>Starship Details</h3>
        <>
          <div className='each-div'>Name: {starshipDetails.name}</div>
          <div className='each-div'>Model: {starshipDetails.model}</div>
          <Link to="/">Return</Link>
        </>
      </div>
    </>
  )
}

export default StarshipDetails