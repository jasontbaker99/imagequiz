import React from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";
//import Server from '../ServerInterface/Server';
import Entry from './Entry';

class Quiz1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            load: true,
            qid: [],
            questchoice:[],
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
        let questionNames = this.state.questchoice;
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

    handleKeyDown = (e) => {
        if(e.keyCode === 39 && this.state.cursor < 5 && this.state.cursor < this.state.entries.length-1){//right
            this.setState({cursor: this.state.cursor+1});
        }
        if(e.keyCode === 37 && this.state.cursor > 0){//left
            this.setState({cursor: this.state.cursor-1});
        }
    }

    restart = () =>{
        
        let api = "https://jasontbaker-imagequiz.herokuapp.com/score";
        let data = {id: this.state.qid, score: this.state.score};
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(x => x.json()).then(y => console.log(y)).catch(e => console.log(e));

        this.setState({cursor: 0});
        let temp = [0,0,0,0,0,0]
        this.setState({answers: temp});
        this.setState({load: true});
    }

    getQuizData = () => {
        let api = 'https://jasontbaker-imagequiz.herokuapp.com/quizzes/1';
        fetch(api).then(x => x.json()).then(out => console.log(out)).catch(e => console.log(e));
        fetch(api).then(x => x.json()).then(out => {
            let qpic;
            let page;
            let qchoice = [];
            let name;
            let e = [];
            for(let i=0;i<out[0].length;i++){    
                if(out[0][i] != null){
                    name = out[0][i].answer;
                    qpic = out[0][i].picture;
                    page = out[0][i].page;
                    for(let j=0;j<3;j++){
                        qchoice.push(out[0][i].choices[j]);
                    }
                    let image = process.env.PUBLIC_URL+"/images/"+qpic;
                    e.push({name,image,page});
                }
            }
            this.setState({entries: e});
            this.setState({questchoice: qchoice});
        }).catch(e => console.log(e));
        this.setState({load: false});
    }

    render() {
        if(this.state.load){
            this.getQuizData();
        }

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