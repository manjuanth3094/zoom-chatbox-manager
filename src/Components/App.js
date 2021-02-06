import '../Css/App.css'
import React, { useState } from 'react'
import Upload from './Upload'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { UserDetails } from './UserDetails'
import Login from './Login'
function App() {
	const [loginStatus, setLoginStatus] = useState(
		localStorage.getItem('user') ? true : false
	)
	return (
		<>
			<Router>
				{loginStatus ? <Redirect to='/upload' /> : <Redirect to='/login' />}
				<Route
					exact
					path='/upload'
					render={(props) => <Upload setLoginStatus={setLoginStatus} />}
				/>
				<Route
					exact
					path={`/userdetail/:user2`}
					render={(props) => <UserDetails />}
				/>
				<Route
					exact
					path={`/login`}
					render={(props) => <Login setLoginStatus={setLoginStatus} />}
				/>
			</Router>
		</>
	)
}

export default App

// // import '../Css/App.css'
// import React, { useEffect, useState } from 'react'
// import _ from 'lodash'
// import * as R from 'ramda'
// // import { Link } from 'react-router-dom'

// function Upload(props) {
//         const [file, setFile] = useState([])
//         const [userName, setUsername] = useState([])

//         const submitForm = (e) => {
//                 e.preventDefault()
//                 // console.log(file)
//         }

//         const openFile = function (event) {
//                 const input = event.target
//                 const reader = new FileReader()
//                 reader.onload = function () {
//                         const text = reader.result
//                         // console.log(text)  

//                         //  const splitByEachLine = text.trim().split(/\n/)                        
//                         //  console.log(splitByEachLine)
//                         // const splitByEachWord = splitByEachLine.map((ele) => {
//                           //         return ele.split(' ')
//                           // })  // or :-
//                         const splitByEachWord = text.trim().split(/\n/).map((ele) => {
//                                 return ele.split(' ')
//                         })
//                         //setFile(splitByEachWord)

//                         const listOfStudents = splitByEachWord.map((ele) => {
//                                 return ele[3]
//                         })

//                         // lodash uniq() to find unique students(remove duplicates)
//                         //const username = _.uniq(listOfStudents) 
//                         const username = R.uniq(listOfStudents) // using ramda uniq()

//                         //ramda- countBy()() to find number of comments of made by different students
//                         const numberOfComments = R.countBy(R.toLower)(listOfStudents)

//                         setUsername(username)
//                         console.log(numberOfComments)
//                 }
//                 reader.readAsText(input.files[0])
//         }
//         // console.log(userName)
//         const liClick = (ele) => {                
//                 console.log(ele)
//                 alert(ele)
//         }

//         return (
//                 <div>
//                     <form onSubmit={submitForm}>
//                             <input type='file' accept='text/plain' onChange={openFile}></input>
//                             {/* <input type='submit' /> */}
//                     </form>

//                     {userName.map((ele) => {
//                             return (
//                                     <li key={ele}
//                                             onClick={() => {
//                                                     liClick(ele)
//                                             }}>
//                                             {ele}
//                                     </li>
//                             )
//                     })}
//                 </div>
//         )
// }

// export default Upload

// // import React,{ useState } from 'react'; 
// // import axios from 'axios'; 

// // function App() { 
// //   const [selectedFile, setSelectedFile] = useState(null)
	
// // 	// On file select (from the pop up) 
// // 	const onFileChange = (event) => { 
	
// // 	  // Update the state 
// //     setSelectedFile(event.target.files[0])
    
// //   }
  
// //   if(selectedFile != null) {
// //     //if(Object.entries(selectedFile) !== 0 ){
// //       console.log(selectedFile.name)
// //       // console.log(selectedFile.type)
// //       // console.log(selectedFile.lastModifiedDate)
// //       // console.log(selectedFile.lastModifiedDate.toDateString())
// //    // }
// //   }

// //   // On file upload (click the upload button) 
// //     let fileReader

// //     const handleFileRead = (e) => {
// //         const content = fileReader.result        
// //         // console.log(content)
// //         // console.log(content.split('Student Six').length)
// //         console.log(content.split(/\n/))

        
// //         // do something with the 'content' data
// //     }
    

// //     const handleFileChosen = (file) => {
// //         fileReader = new FileReader()
// //         fileReader.onloadend = handleFileRead;
// //         fileReader.readAsText(file);
        
// //     };
  	
	
	
  
// // 	// File content to be displayed after 
// // 	// file upload is complete 
// // 	const fileData = () => { 	
// //     if (selectedFile) { 		
// //       return ( 
// //         <div> 

// //           <h2> File Details : </h2> 
// //           <p> File Name : {selectedFile.name}</p> 
// //           <p> File Type : {selectedFile.type}</p> 
// //           <p> 
// //             Last Modified : {' '} {selectedFile.lastModifiedDate.toDateString()}             
// //           </p> 
// //         </div> 
// //       ) 
// //     } else { 
// //         return ( 
// //         <div> 
// //           <br /> 
// //           <h4 style={{color: 'red'}}> Choose file before Pressing the Upload button </h4> 
// //         </div> 
// //         )
// // 	    } 
// // 	}; 
	
// // 	return ( 
// // 		<div> 
// // 			<h1> DCT HACKATHON </h1> 
// // 			<h3> File Upload </h3> 

// // 			<div> 
// //         <form>
          
// //           <input type="file" onChange={onFileChange} /> 

// //           {/* <button onClick={e => handleFileChosen(e.target.files[0]) }> Upload </button>  */}
// //           <label>Upload</label>
// //           <input type='file'
// //                 id='file'
// //                 className='input-file'
// //                 accept='.txt'
// //                 onChange={e => handleFileChosen(e.target.files[0])}
// //           />
// //         </form>
				
// // 			</div> 

// // 		  {fileData()} 
// // 		</div> 
// // 	)	 
// // } 

// // export default App; 