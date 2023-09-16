 import { useState } from 'react'

function App3(){
 const [data, setData] = useState({fname:"" , lname:""})

        function handleChange(event) {
            event.preventDefault();
            setData({fname:"", lname:""})
            console.log(data);
            console.log(data);
 
          }
        
       
        // console.log(event.target.value);

        setData({...data,[event.target.name]: event.target.value });

        // console.log(event.target.value);
    
   
    return(
        <>
            <form onChange={handleChange} className="flex flex-col items-center h-screen justify-center">
                <label>First Name: 
                <input onChange={handleChange} value={data.fname} name="fname" className=" shadow-xl" type="text"/></label>
                <label>Last Name:
                <input onChange={handleChange} value={data.lname} name="lname" className="shadow-xl" type="text" /> </label>
                <input className='border bg-blue-600 text-white mt-4 px-3 rounded-md' type="submit" value={'submit'}/>
            </form>
        </>
    )
}
export default App3

// const [data, setdata] = useState({ fristName: "", lastName: "" });

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(data);
//     setdata({ fristName: "", lastName: "" });
//   }

//   function handleChange(event) {
//     console.log(event.target.value, event.target.name);
//     setdata({ ...data, [event.target.name]: event.target.value });
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <lable htmlFor="fristName">
//             Frist Name:
//             <input
//               id="fristName"
//               value={data.fristName}
//               onChange={handleChange}
//               name="fristName"
//               type="text"
//             />
//           </lable>
//           <br />
//           <lable htmlFor="lastName">
//             Last Name:
//             <input
//               id="lastName"
//               value={data.lastName}
//               onChange={handleChange}
//               name="lastName"
//               type="text"
//             />
//           </lable>
//           <br />
//           <button type="submit">Submit</button>
//           </fieldset>
//       </form>
//     </div>
//   );
//   }

// export default App3

