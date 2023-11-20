import './index.css'
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom';

const Header = props => {

    const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    return(
        <div className='header-container'>
            <div className='header-sub-container'>
                <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1700030430/Mini%20Project/logo1_h4274b.png" className='logo' alt="logo" />
                <div className='search-and-logout-container'>
                    <input type='text' className='search-input' placeholder='Search For Movie' />
                    <button type='button' onClick={onClickLogout} className='logout-button'>Logout</button>
                </div>
            </div>

        </div>
    )
}
export  default withRouter(Header);