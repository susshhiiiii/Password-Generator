import { useCallback, useState ,useEffect} from 'react'
import './App.css'

function App() {

  const [length,setLength]=useState(8);
  const [numal,setNumall]=useState(false);
  const [charal,setCharal]=useState(false);
  const [password,setPasword]=useState("");


  const passswordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEGHIJKLMNOPWRSTWXYZabcdefghijklmnopqrstuvwxyz";

    if(numal)str+="0123456789";
    if(charal)str+="<.,>/?@#$%^&*()_!+=";

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }

    
    setPasword(pass);
  },[length,numal,charal])

  useEffect(()=>{
    passswordGenerator()
  },[length,numal,charal,passswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-14
      text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3 '>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='pasword'
        readOnly/>
        <button className='outline-none bg-blue-600 text-white
        px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={50} 
            value={length}
            className='cursor-pointer'
            onChange={(event)=>{setLength(event.target.value)}}
            />
            <label>Length={length}</label>
            <p>  </p>
          </div>
        <div className='flex items-center gap-x-1 px-1'>
          <input type="checkbox"
          defaultChecked={charal}
          id='numberInput'
          onChange={()=>{
            setCharal((prev)=>!prev)
          }} />
          <label htmlFor="characterInput">Characters</label>
          
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked={numal}
          id='numberInput'
          onChange={()=>{

            setNumall((prev)=>!prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
        
      </div>
    </>
  )
}

export default App
