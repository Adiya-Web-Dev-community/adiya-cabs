
import { useState } from 'react'
import {AiOutlineDown,AiOutlineUp,AiOutlineSearch} from 'react-icons/ai'

const CustomSelectinput = ({data,getData,label,onClick,setDropDownId,dropDownId,initialValue,animationStop}) => {


    const [inputvalName,setInputValName] = useState('')
    const [selectedName,setSelectedName] = useState(initialValue?.trim()||label)

    function getDataFun(event,el){

       if(event.target.id==='data-li-c'){
          getData(el)
          setSelectedName(el.value)
          setDropDownId('')
       }
    }

    function handleClick (){
      if(onClick){
        onClick(()=>{setDropDownId(prev=>prev===label?'':label)})
      }else{
        setDropDownId(prev=>prev===label?'':label)
      }
      setInputValName('')
    }



  return (
 <div className='w-full bg-white rounded-sm relative my-4  ' >
    <div className="w-full rounded-md h-[2.6rem]  p-2 border-gray-300 border-2 flex justify-between cursor-pointer" calssName='w-100' onClick={handleClick} >
        <p className='text-md'>{selectedName}</p>
        {!label===dropDownId?<div className='justify-self-end '><AiOutlineDown/></div>:
        <div className='justify-self-end'> <AiOutlineUp/></div>}
      </div>
      <div className='border-2 shadow-xl  absolute top-[110%] z-10  bg-white rounded p-4 w-full' style={{display:`${label===dropDownId?'block':'none'}`}}>
      <div className="flex pb-2 text-md ">
          <div className='py-2' ><AiOutlineSearch/></div>
          <input spellcheck="false" type="text" placeholder="Search" className='w-full outline-none border-none text-md'
           value={inputvalName}
           onChange={(e)=>setInputValName(e.target.value)}/>
        </div>
      <div className="overflow-y-scroll  max-h-[160px] rounded-sm relative border" calssName='w-100'>
      
        <ul className="p-0 m-0">

        {data?.filter((el)=>(el?.value ).toLocaleLowerCase().includes(inputvalName.toLocaleLowerCase())).map((el,i)=>{
                  return( 
                        <li key={i} id='data-li-c' className='py-4 px-1 border bt-1 hover:bg-blue-50 cursor-pointer flex ' 
                        onClick={(e)=>getDataFun(e,el)} >
                        {<el.icon className='mx-2'/>}
                        {el.label}
                        </li>
                        )
                    })}
        </ul>
      </div>
      </div>
 </div>
  )
}

export default CustomSelectinput