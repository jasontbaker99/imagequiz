import React from 'react';
import './Home.css';
import { Link } from "react-router-dom"

class Home extends React.Component {

    render() {

        class Flower {
            constructor(name, pictureName) {
                this.name = name;
                this.picture = pictureName;
            }
        }

        let flower = new Flower('Flower quiz', 'daffodil.png');
        let mammal = new Flower('Mammal quiz', 'bear.png');
        let bird = new Flower('Bird quiz', 'bird.png');

        let pic = [
            mammal,
            bird,
            flower,
        ];

        function drawPics(f,num) {
            //let p = "../images/"+f.picture;
            let title = "/Quiz"+num;
            return (
                <div className="imagediv">
                    <Link to={title}>
                        <img className="image" src={process.env.PUBLIC_URL + "/images/" + f.picture} alt="" />
                        <br/>
                        {f.name}
                    </Link>
                </div>
            );

       }

        let username = '';
        if (this.props.location) {
            if (this.props.location.state) {
                if (this.props.location.state.userN) {
                    username = this.props.location.state.userN;
                }
            }
        }

        return (
            <div>
                <div className="TopRight">
                    {username.length > 0 ? <div>{username}<br /><Link to="/"> Logout</Link></div>
                        : <Link to='/login'>Login</Link>}
                </div>
                <div className="Pics">
                    {drawPics(pic[0],1)}
                    {drawPics(pic[1],2)}
                    {drawPics(pic[2],3)}
                </div>
            </div>
        );
    }
}

export default Home;