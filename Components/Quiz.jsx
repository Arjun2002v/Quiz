import React, { useState } from 'react'
import { data } from '../src/assets/data';


export default function Quiz() {

    let[index,setindex] = useState(0);
    let[score,setscore] = useState(0);
    const[result,setresult]=useState(false);
    let[lock,setlock] = useState(false);
    



    const[quest,setquest] = useState(data[index]);
   
    

      const Check = (e,a)=>{

        if(lock===false){
            if(quest.ans === a){
       
          
                setscore(score+1);
                console.log(score);
               
              
              }   
              else {
                
               
                setscore(score--);
                console.log(score);
                
              }

        }

       

      }


  

    
    
function next() {

    if(index===data.length-1){
       setresult(true);
       return 0;
      
       
    
       
       
    }

    setindex(++index);
    setquest(data[index]);
  
}



   
  return (
    <div className='Container'> 

    

    <div className='q-body'>

        <h2>QuizApp</h2>
        
        
    {result?<> <h1>Congrats You Scored</h1>
    <h2>{score}/{data.length }</h2>

    </> : <>

    <div className='Questions'>
            <h2>{index+1}. {quest.Q}</h2>
            <div className='options'> 
           
            

            <li   onClick = { (e)=>{Check(e,1)}} > {quest.op1}</li>
            <li   onClick = { (e)=>{Check(e,2)}}> {quest.op2}</li>
            <li  onClick = { (e)=>{Check(e,3)}}>{quest.op3}</li>
            <li  onClick = { (e)=>{Check(e,4)}}>{quest.op4}</li>
            </div>
              
              <div className='buttons'>

              <button onClick={next}>Next</button>
              
             
             
              </div>
              <h2>{index+1} of {data.length} Questions</h2>
             
          
        </div>
        </>}
        
       

       

        

        

    </div>
   
  

      
    </div>
  )
}
