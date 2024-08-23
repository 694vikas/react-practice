import "./Navigation.css"
import "./images/brand_logo.png"
function Navigation() {
    return (<>
        <div className="navbar">
            <img src="./images/brand_logo.png" alt="Brand Logo" />
        </div>
        <div>
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button>Login</button>
        </div>






    </>


    );



}
export default Navigation;