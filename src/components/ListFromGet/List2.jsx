import { useState } from "react";
import { useEffect } from "react";
//import axios from 'axios';

function List2(){

    const [data, setData] = useState(null);

    useEffect(()=>{

        //Axios method
        // axios.get('http://localhost:3000/api/data').then(res => {
        //     //data received
        // }).catch(_ => {
        //     //error here
        // }); 

        //Fetch method
        fetch('http://localhost:3000/api/data').then(res => res.json()).then((result)=>{
            setData(result);
        },
        (_) => {
            setData('error');
        });
    }, [])

    const CheckState = () =>{

        if(data !== 'error'){
            return(
                <div className="datas">
                    <h2 className="state-msg">Got some stash!</h2>
                    <ul>
                        {data?.map((item, i) => <li className="item" key={i}>{item.name}</li>)}
                    </ul>
                </div>);
        }
        
        return(<h2 className="state-msg">Something went wrong</h2>);
    }

    return(
        <div className="list2">
            {data ? <CheckState /> : <h2 className="state-msg">Please wait...</h2>}
        </div>
    );
}

export default List2;