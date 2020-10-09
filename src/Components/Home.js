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

        let daffodil = new Flower('Daffodil', 'daffodil.png');
        let cherryblossom = new Flower('Cherry blossom', 'cherryblossom.png');
        let lily = new Flower('Lily', 'lily.jpg');
        let daisy = new Flower('Daisy', 'daisy.jpg');
        let sunflower = new Flower('Sunflower', 'sunflower.png');
        let tulip = new Flower('Tulip', 'tulip.png');
        let rose = new Flower('Rose', 'rose.png');
        let waterlily = new Flower('Water lily', 'waterlily.png');

        let flowers = [
            daffodil,
            cherryblossom,
            lily,
            daisy,
            sunflower,
            tulip,
            rose,
            waterlily
        ];

        function drawPics(f) {
            let p = "/images/"+f.picture;
            return (
                <div>
                    <img className="image" src={p} alt="" />
                    <br/>
                    {f.name+" and "+p}
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
                    {username.length > 0 ? <div>{username}
                        <br /><Link to="/"> Logout</Link></div>
                        : <Link to='/login'>Login</Link>}
                </div>
                <div className="Pics">
                    {drawPics(flowers[0])}
                    {drawPics(flowers[1])}
                    {drawPics(flowers[2])}
                    {drawPics(flowers[3])}
                    {drawPics(flowers[4])}
                    {drawPics(flowers[5])}
                    {drawPics(flowers[6])}
                    {drawPics(flowers[7])}
                    <img className="image" alt="" src="../images/daffodil.png" />
                    <img className="image" alt="" src="/jasontbaker99/ISTA330/blob/gh-pages/practicum/week-5/images/daffodil.png?raw=true" />
                    done
                </div>
            </div>
        );
    }
}

export default Home;