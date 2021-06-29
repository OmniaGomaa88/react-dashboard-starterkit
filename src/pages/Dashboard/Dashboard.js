import React from "react";
import { useRef, useEffect, useState,useContext } from "react";
import promoService from '../../services/promo'
const Dashboard = (props) => {
  const [promos, setPromos] = useState([]);
  const [error, setError] = useState(false);
  const isInitialMount = useRef(true);

  
    const getPromos = async () => {
      
        const promosdata = await promoService.getAll();
       
        setPromos(promosdata.data);
        
        console.log(promos)
        console.log(promosdata.data)
      
    };


    useEffect((props)=>{
        getPromos();
      
    },[])

 
    return (
       
        <div>
          {error && <p>{error}</p>}
          <h1>Welcome !</h1>

          {promos.map((promo,index)=>{
              return(
               <li key={index}>{promo.name}</li>
              )
              
          })
        }
          </div>
       
      );
     

};

export default Dashboard;
