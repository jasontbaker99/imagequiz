import React from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";
import Server from '../ServerInterface/Server';
import Entry from './Entry';

class Quiz1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            entries: [],
            cursor: 0,
            score: 0,
            answers: [0,0,0,0,0,0]
        };
    }

    wrong = () =>{
        let count = this.state.cursor;
        let temp = this.state.answers;
        temp[count] = 0
        this.setState({answer: temp});
        if(this.state.cursor < this.state.entries.length){
            this.setState({cursor: this.state.cursor+1});
        }
    }

    right = () =>{
        let count = this.state.cursor;
        let temp = this.state.answers;
        temp[count] = 1
        this.setState({answer: temp});
        if(this.state.cursor < this.state.entries.length){
            this.setState({cursor: this.state.cursor+1});
        }
    }

    body = () => {
        let questionNames = ["dog","cat","bear","cat","fox","dog",
        "moose","mouse","fox","fox","dog","cat",
        "mouse","fox","moose","moose","lion","mouse",
        ];
        const {entries, cursor} = this.state;
        return(
            <div className="Content">
                
                <div className="Content">
                    <button className='buttons' onClick={this.wrong}>
                        {questionNames[0+(this.state.cursor*3)]}</button>
                    <button className='buttons' onClick={this.wrong}>
                        {questionNames[1+(this.state.cursor*3)]}</button>
                    <button className='buttons' onClick={this.right}>
                        {questionNames[2+(this.state.cursor*3)]}</button>
                </div>
                {entries.length > 0 ? 
                <div className="entry">
                    <Entry entry={entries[cursor]}/>
                </div> : ''};
            </div>
        );
    }

    componentDidMount() {
        const Entries = Server.fetchEntries();
        this.setState({entries: Entries});
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 39 && this.state.cursor < 5 && this.state.cursor < this.state.entries.length-1){//right
            this.setState({cursor: this.state.cursor+1});
        }
        if(e.keyCode === 37 && this.state.cursor > 0){//left
            this.setState({cursor: this.state.cursor-1});
        }
    }

    restart = () =>{
        this.setState({cursor: 0});
        let temp = [0,0,0,0,0,0]
        this.setState({answers: temp});
    }

    render() {
        var total = 0;
        //console.log(this.state.answers);
        total = this.state.answers[0]+this.state.answers[1]+this.state.answers[2]+this.state.answers[3]+this.state.answers[4]+this.state.answers[5];
        //console.log(total);
        return (
            <div>
                <div className="TopRight">
                    <Link to="/">Home</Link>
                </div>
                <div className="Content">Hello to Q1
                <br/>Hit right arrow to move right
                <br/>Hit left arrow to move left
                <br/>Choosing answer moves forward
                <br/>The last question page (6/6) submits score
                <br/><br/><br/><br/>
                </div>
                <div className="Content">
                    {this.state.cursor < 6 ? <div>{this.body()}</div>
                        : <div>{"Your Score: "+total+"/6"}<br/><button onClick={this.restart}>Retry</button></div>}
                </div>
            </div>
        );
    }
}
export default Quiz1