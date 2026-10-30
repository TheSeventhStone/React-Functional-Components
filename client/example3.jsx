const React = require("react");
const { useState, useEffect } = React;
const { createRoot } = require("react-dom/client");

const SongContainer = (props) => {

    const [songs, setSongs] = useState(props.songs);

    useEffect(() => {

        const loadSongsFromServer = async () => {
            const response = await fetch("/getSongs");
            const data = await response.json();
            setSongs(data);
        };
        loadSongsFromServer();
    }, []);

    if (songs.length === 0) {
        return (
            <>
                <h3>No songs yet!</h3>
            </>
        );
    }
    

    const songList = songs.map((song => {
        return (
            <div>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    }));

    return (
        <div>
            <h1>My Favorite Song!</h1>
            {songList}

        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById("app"));
    root.render(<SongContainer songs={[]} />);
};

window.onload = init;