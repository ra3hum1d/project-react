import '../../reset.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
function Cards() {
    return (
        <>


            <div className="card">
                <div className="desc">
                    <p className="city"></p>
                    <p className="country"></p>
                </div>
                <div className="info">
                    <h2 className="time"></h2>

                    <div className='term-buttons'>
                        <button className='hourly-button'></button>
                        <button className='weekly-button'></button>
                    </div>

                    <img src="" alt="" className="weather-pic" />
                    <h2 className="temp"></h2>
                </div>

            </div>



        </>
    )
}

export default Cards






