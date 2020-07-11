import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Bob" />
            <Welcome name="Dormamu" />
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
            <Tick />
        </div>
    );
}

function Tick() {
    return (
        <Clock date={new Date()} />
    );
}

class Clock extends React.Component {

    //The only place where you can assign this.state is in the constructor
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; //This assigns an atttribute date to an object of the state
    }

    //These are lifecycle methods, this componentDidMount method runs after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()  //This alters the attribute of the current local state, causing the DOM to call the render method again
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'React!',
    author: {
        name: 'Cat Boy',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};


ReactDOM.render(
    <App />, 
    document.getElementById('root')
)

export default App;