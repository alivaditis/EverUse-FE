import '../styles/_Success.scss'
import { useNavigate } from 'react-router-dom'

const Success = ({ successMessage }) => {
  const navigate = useNavigate()
  
  if(!successMessage) {
    navigate('/')
  }

  return <p className='success'>{successMessage}</p>
}

export default Success