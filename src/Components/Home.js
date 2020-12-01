import React from 'react';
import './Home.css';
import { Link } from "react-router-dom"

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            load: true,
            id: 0,
            pic: "",
            name: "",
            scores: [],
        };
    }

    getMetaData = () => {
        let api = 'https://jasontbaker-imagequiz.herokuapp.com/quizzes';
        fetch(api).then(x => x.json()).then(out => console.log(out)).catch(e => console.log(e));
        fetch(api).then(x => x.json()).then(out => {
            console.log(out);
            let q = [];
            let n = [];
            let p = [];
            for(let i=0;i<out.length;i++){    
                q.push(out[i].id);
                n.push(out[i].name);
                p.push(out[i].pic);
            }
            this.setState({id: q});
            this.setState({name: n});
            this.setState({pic: p});
        }).catch(e => console.log(e));
        this.setState({load: false});
    }

    drawPics = (id) => {
        let title = "/Quiz"+this.state.id[id];
        console.log(title);
        return (
            <div className="imagediv">
                <Link to={title}>
                    <img className="image" src={process.env.PUBLIC_URL + "/images/" + this.state.pic[id]} alt="" />
                    <br/>
                    {this.state.name[id]}
                </Link>
            </div>
        );
    }

    body = () => {
        let t = [];
        for(let i=0;i<this.state.name.length;i++){
            t.push(this.drawPics(i));
        }
        return t;
    }

    render() {

        if(this.state.load){
            this.getMetaData();
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
                    Here are the quizes from server:<br/>
                    Hitting "retry" at the end of the quiz<br/> will send scores to server
                    {this.body()}
                </div>
            </div>
        );
    }
}

export default Home;