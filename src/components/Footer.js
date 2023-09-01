import logo from '../images/everuse-logo.png'

const Footer = () => {
  return ( 
    <div className='footer'>
      <img src={logo} alt="EverUse logo in orange, curvy text" className='footer__logo' /> 
      <p className='footer__text'>contact@everuseproducts.com</p>
      
    </div>
  )
}

export default Footer;