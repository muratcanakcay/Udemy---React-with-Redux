import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return ( 
        <div className="ui container comments">
            <CommentDetail author="Sam" avatar={faker.image.avatar()} timeAgo="Today at 4:45PM" commentText="Great blog dude!"/>
            <CommentDetail author="Alex" avatar={faker.image.avatar()} timeAgo="Today at 2:00AM" commentText="Nice one!"/>
            <CommentDetail author="Jane" avatar={faker.image.avatar()} timeAgo="Yesterday at 5:00PM" commentText="Very pretty!"/>
        </div>


    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));