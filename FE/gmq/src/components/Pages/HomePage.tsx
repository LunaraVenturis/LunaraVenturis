import './PlayButton.css'

/**
 * Logs a message to the console when the button is clicked
 */
const handleClick = () => {
    console.log("Clicked!");
}

/**
 * Returns a JSX element which is a centered play button.
 * When clicked, logs a message to the console.
 */
export const Home = (): JSX.Element => {
    return (
        <div className="BtnPos" >
        <button className={"button PlayBtn"} onClick={handleClick}>
            Play
        </button>
        </div>
        );
}