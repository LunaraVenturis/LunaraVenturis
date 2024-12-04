import './PlayButton.css'

function handleClick()
{
    console.log("Clicked!");
}
export const Home = (): JSX.Element => {
    return (
        <div className="BtnPos" >
        <button className="PlayBtn" onClick={handleClick}>
            Play
        </button>
        </div>
        );
}