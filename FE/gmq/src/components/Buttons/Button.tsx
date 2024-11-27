
function handleClick()
{
    console.log("Clicked!");
}

export default function Button()
{
    
    return (
        <div>
        <button onClick={handleClick}>
        </button>
        </div>
        );
}