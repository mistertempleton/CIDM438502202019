/*
ReactDOM.createElement(
    1. what html element do you want to make?),
    2. are there any attribute/properties you need to pass so that I can configure this new element?
    3. what content shall I place into this element? OR
    4. Children
*/

/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }*/

class ToDoList extends React.Component {
    render(){
        React.createElement('ul', {}, [
            React.createElement('li', {}, "first thing"),
            React.createElement('li', {}, "second thing")
        ]
        );        
    }
}

export default ToDoList;