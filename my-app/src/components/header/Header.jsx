import './Header.css'
import '../../reset.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
function Header() {
    return(
        <>


        <nav className="nav">
            <div className="nav-left">
                <img src={logo} alt="" className="nav-left-logo" />
                <ul className="nav-left-list">
                    <li className="nav-left-list-li">Who we are</li>
                    <li className="nav-left-list-li">Contacts</li>
                    <li className="nav-left-list-li">Menu</li>
                </ul>
            </div>
            <div className="nav-right">
                <button className="nav-right-sign">Sign Up</button>
                <img src={logo} alt="" className="nav-right-user" />
            </div>
        </nav>

        <section className='hero'> 

        <div className='hero-wrap'>
        <h2 className='hero-title'>Weather dashboard</h2>
        <div className='text-hero'>
            <p className="left-text-hero">Create your personal list of <br />favorite cities and always be <br /> aware of the weather.</p>
            <div className="line-hero"></div>
            <p className="right-text-hero">October 2023 <br /> Friday, 13th</p>
        </div>
        </div>

        <div className='text-form-cont'>
        <label htmlFor="" className='text-form-label'><input type="text" className='text-form-input' placeholder='Search location...' /><button className='text-form-btn'><img src={search} alt="" /></button></label>
        </div>

        </section>



        </>
    )
}
export default Header






