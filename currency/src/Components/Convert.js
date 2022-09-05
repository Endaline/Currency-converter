import React, { useState,useEffect} from 'react'

function Convert() {
 
  const [amount, setAmount] = useState('')
  // currency1 is reponsible for from 
  const [currency1, setCurrency1] = useState('')
  // currency1 is reponsible for to
  const [currency2, setCurrency2] = useState('')
  // this is the empty array we are trying to use  and fetch API
  const [rates, setRates] = useState([])
  // this is responsible for compeling the result
  const [output, setOutput] = useState(0)
  const [show, setShow] = useState(false)
 

   const url = 'https://v6.exchangerate-api.com/v6/950c81e733d1e121c584b0e3/latest/USD'
       
    useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      //since the api is an object we try to add the particular stuff we want from the api when fetching the api just like the (conversion_rates)
      
    .then((data) => {setRates(data?.conversion_rates) });
 
     },[])



 

// the Api is an object so we make use of object.keys() to get the value
const darlinObject = Object.keys(rates)

  function convert() {
    //  here l am  trying to  convert  currency1 and currency2 to numbers by adding Number as the prefix

    const from = Number(rates[currency1])

     const to = Number(rates[currency2])


    const ans = Number(amount )* to / from
    
    setOutput(ans)
    setShow(!show)
   
}
 


// 
// console.log('2',currency2);



  return (
    <div className="bg-[#161644] m-4 mx-10 p-4 rounded-md shadow-md ">
 
     
      <div>
        <h2 className='text-white font-bold max-h-4'>Currency Converter</h2>
      </div>
      
      <div className=" justify-center items-center p-3 m-3 max-h-80 flex  flex-col lg:flex-row ">
        
        <div className="p-4"> 
          <p>
            <label  className='font-semibold text-white'> Amount</label>
          </p>


          <input
            onChange={(e)=> setAmount(e.target.value)}
            className="border px-5 py-2 rounded-md shadow  outline-none"
            type="text"
            value={amount}
          />
        </div>
        <div className="p-4 relative">
          <p>
           
            <label className='font-semibold text-white'>From </label>
          </p>

         

          <div>
             <select className='w-[300px] h-[50px] text-xl flex items-center shadow-md rounded-md'
         
            onChange={(e) => setCurrency1(e.target.value)}
          >
            {darlinObject.map((item,index) => (
              <option value={item.rer}  key={index}>{item}</option>
            ))}
          </select>

          </div>

          
        </div>
         
        <div className="p-4 relative">
          <p>
            <label  className='font-semibold text-white'>To</label>
          </p>

        

           <div>
             <select className='w-[300px] h-[50px] text-xl flex items-center shadow-md rounded-md'
            value={currency2}
            onChange={(e) => setCurrency2(e.target.value)}
          >
            {darlinObject.map((item,index) => (
              <option  key={index}>{item}</option>
            ))}
          </select>

          </div>

        
         
        </div>
      </div>
      <div className=" lg:ml-[50rem] ml-[10rem]" >
        <button onClick={convert} className=" bg-[white] text-black px-4 py-2 rounded-md shadow font-bold" type='submit'>
          Convert
        </button>
        {show === true ? <div>
          <h2 className='text-white font-bold mt-7'>Converted Amount:</h2>
          <p className='text-white'>{amount + " " + currency1 + " = " + output.toFixed(2) + " " + currency2}</p>
        </div>
          : ""}
        
       
      </div>
         
      
      <div className='flex justify-center mx-7'>
       
        
        </div>
    </div>
  )
}

export default Convert
