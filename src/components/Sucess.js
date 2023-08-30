import '../styles/_Success.scss'

const Success = ({ successMessage, updateSuccessMessage }) => {

  return (
    <div className='success'>
          <button className='success__button' onClick={() => updateSuccessMessage()}>X</button>
          <h2>{successMessage}</h2>
          <p>An order request confirmation will be sent to your email shortly.</p>
    </div>
    )
}

export default Success