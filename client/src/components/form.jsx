import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible,AiOutlineCheck } from 'react-icons/ai';


const Input = ({ className, onChange, value, name, type, required, label }) => {
  const [inputState, setInputState] = useState({
    activeInput: false,
    showPassWord: false,
    inputValue:value
  });


  const handleChange = (e)=>{
    setInputState((prev) => ({ ...prev, inputValue: e.target.value}))
    if(onChange){
      onChange(e);
    }
  }




  return (
    <div className={`group flex border-gray-300 border-2 hover:border-gray-700 rounded overflow-hiden relative h-[2.6rem]  transition ${
      inputState.activeInput ? 'border-2 border-gray-700' : ''
    } transition-all duration-300 ease-in-out ${className || ''}`}>
      <label
        onClick={() => setInputState((prev) => ({ ...prev, activeInput: true }))}
        className={`cursor-auto transition-all duration-300 ease-in-out delay-150 absolute top-1/2 transform -translate-y-1/2 p-2 text-gray-500 ${
          (inputState.activeInput || inputState?.inputValue?.trim()) ? 'top-[-0.4rem] text-sm ml-3 m-0' : ''
        }`}>
        <span className='bg-white px-2'>{label}</span>
      </label>
      <input
        required={required}
        onChange={handleChange}
        value={value||inputState.inputValue }
        onFocus={() => setInputState((prev) => ({ ...prev, activeInput: true }))}
        onBlur={() => setInputState((prev) => ({ ...prev, activeInput: false }))}
        type={inputState.showPassWord ? 'text' : type}
        name={name}
        className='p-2 h-full w-full outline-none bg-transparent rounded'
      />
      {type?.trim() === 'password' && (
        <div className='text-3xl text-gray-500 flex items-center p-2'>
          <div onClick={() => setInputState((prev) => ({ ...prev, showPassWord: !prev.showPassWord }))} className='hover:bg-black/5 rounded-full my-[0.5rem] p-[0.2rem] transition-all duration-300 ease-in-out cursor-pointer'>
            {inputState.showPassWord ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>
      )}
    </div>
  );
};



const Button = ({onClick,children})=>{
return   <button onClick={onClick} className="transition w-64 p-2 rounded ease-in-out text-white delay-150 bg-red-400 active:-translate-y-1 active:shadow-xl hover:scale-110 hover:bg-red-500 duration-300 ">
  {children}
 </button>
}



const Checkbox = ({ label, checked, onChange,className,name}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`inline-flex items-center cursor-pointer ${className}`}>
      <div className={"relative"}>
        <input
          type="checkbox cursor-pointer"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheckbox}
          name={name}
        />
        <div className={`w-6 flex items-center justify-center h-6 border rounded-md ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}>
           <AiOutlineCheck/>
        </div>
      </div>
      <span className="ml-2">{label}</span>
    </div>
  );
};

const CustomSelect = ({ options, onSelect,className,label,name,onActive }) => {
  const [value, setValue] = useState('');
  const [activeDropDown,setDropDoun] = useState(false)

  const handleChange = (e) => {
    setValue(e?.target?.value)
    if(e?.target?.value?.trim()){
      onActive({insert:false,ignoreInput:name,inputValue:e?.target?.value})
      setDropDoun(true)
    }else{
      onActive({insert:false,ignoreInput:name,inputValue:e?.target?.value})
      setDropDoun(false)

    }
  };

  const handleOptionClick =(value)=>{
    if(onSelect){
      setValue(value.value)
      onSelect({name:name,value})
      onActive({insert:true,ignoreInput:name,inputValue:value.value})
      setDropDoun(false)
    }
  }

  return (
    <div className="inline-block relative ">
      <Input label={label} value={value} name={name} onChange={handleChange}  className={className}/>
      {activeDropDown&& (
        <div className=" bg-white  z-10 relative w-full overflow-y-scroll  rounded shadow-lg border  max-h-[9rem]">
          <div className="rounded-md shadow-xs">
            <div className="py-1">
              {options.filter((el)=>el?.value?.includes(value.toLocaleLowerCase())).map((option,i) => (
                <button
                  key={i}
                  className={`${                  
                     option.value.includes(value) ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-700 hover:bg-gray-100'
                  } block w-full text-left px-4 py-2 text-sm leading-5 focus:outline-none`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;



export {Input,Button,Checkbox,CustomSelect}