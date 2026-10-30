const React = require("react");
const {useState} = React;
const { createRoot } = require("react-dom/client");

const HelloUser = (props) => {
    const [username, nameChange] = useState(props.username);
    return(
        <div>
            <p>Hello {username}</p>
            <label>Change Name: </label>
            <input type="text"
             value = {username}
             onChange={(e) => nameChange(e.target.value)}
             />
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById("app"));
    root.render(<div><HelloUser username="test" /></div>);
}

window.onload = init;