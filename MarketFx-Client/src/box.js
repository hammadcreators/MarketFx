import { Link } from "react-router-dom";


const Box=(props)=>{
     return(
        <div className="d-flex flex-row align-content-end justify-content-between bg-secondary text-white w-100 py-1 mx-1 px-4 b-2 "
        style={{
            
            borderRadius:10,
        }}>
            <div style={{borderWidth:1,borderColor:'black',fontWeight:"bold"}}> 
                <p>{props.Title}</p>
                <p>{props.Cateory}</p>
            </div>
            <div> 
                <p>{props.Price}</p>
                
            </div>
        </div>
     );
};
export default Box;