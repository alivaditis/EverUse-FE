// SUCCESS COMPONENT // 

import '../styles/_Success.scss';

const Success = ({ successMessage, updateSuccessMessage }) => {

  return (
    <div className='success'>
          <button className='success__button' onClick={() => updateSuccessMessage()}>X</button>
          <h2>Successful Submission</h2>
          <p>{successMessage}</p>
    </div>
    )
};

export default Success;