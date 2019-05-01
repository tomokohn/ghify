import React from 'react';
// import './Navbar.css';

const List = (props) => {
    const { gifs } = props;
    const createList = (data) => {
        return data.map((gif) => (
            <div className="gif">{gif.name}</div>
        ))
    }
    return (
        <div className="list">
          {createList(gifs)}
        </div>
    )
}

export default List;
