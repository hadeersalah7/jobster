import ErrorPageWrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <ErrorPageWrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't find the page that you're looking for!</p>
        <Link to={"/"}>go home</Link>
      </div>

    </ErrorPageWrapper>
  )
}

export default Error