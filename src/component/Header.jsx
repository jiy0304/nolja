import Logo from '../assets/logo_w.png'
import Mypae from '../assets/ico_mypage.svg'
import Wishlist from '../assets/ico_wishlist.svg'
import Cart from '../assets/ico_cart.svg'

const Header = () => {
  return (
    <>
      <header>
        <div className="inner">
          <h1><a href="#"><img src={Logo} alt="야놀자" /></a></h1>

          <ul className='util'>
            <li><a href="#"><img src={Mypae} alt="마이페이지" /></a></li>
            <li><a href="#"><img src={Wishlist} alt="찜" /></a></li>
            <li><a href="#"><img src={Cart} alt="장바구니" /></a></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header


