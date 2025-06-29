function Counter(){
    let result = 0;

    function handClick(){
        result = result + 1;
    }

    return(
        <div>
            <p>Result :{result}</p>
            <button onClick= {handleClick}>Add</button>
        </div>
    );
}

export default Counter;