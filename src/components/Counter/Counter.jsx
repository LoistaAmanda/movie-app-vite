import { useState, useEffect} from "react";
function Counter(){

    const [angka, setAngka] = useState(0);

    useEffect(()=>{
        console.log("Lifecycle : Component dimount");
        document.title = `Result: ${angka}`; //DOM

    manipulateDOM(); //angka yang ada di dalam variabel useState
    //dimanipulasi ke DOM atau di kirimkan ke DOM
    //tujuannya agar ketika data aaray dibelakang layar berubah
    //maka UI secara Realtime jugfa berubah

    }, [angka]);
    console.log("Lifecycle Component di render")

    //let angka = 0;
    function AddAngka(){
        //angka++;
        setAngka(angka + 1);
        console.log(angka);
    }
    return(
        <div>
            <p>Result : {angka} </p>
            <button onClick={AddAngka}>Add</button>
        </div>
    )
}

export default Counter;