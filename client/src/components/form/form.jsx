import React, { useState,useRef } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineCheck } from 'react-icons/ai';


const Input = ({ className, onChange, value, name, type, required, label,animationStop }) => {
  const [inputState, setInputState] = useState({
    activeInput: false,
    showPassWord: false,
    inputValue: value
  });

  const inputRef = useRef(null)


  const handleChange = (e) => {
    setInputState((prev) => ({ ...prev, inputValue: e.target.value }))
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={`group flex border-gray-300 border-2 hover:border-gray-700 rounded overflow-hiden relative h-[2.6rem]  transition ${ inputState.activeInput ? 'border-2 border-gray-700' : ''
      } transition-all duration-300 ease-in-out ${ className || '' }`}>
      {!animationStop&&<label
        onClick={() => setInputState((prev) => ({ ...prev, activeInput: true }))}
        className={`cursor-auto transition-all duration-300 ease-in-out delay-150 absolute top-1/2 transform -translate-y-1/2 p-2 text-gray-500 ${ (inputState.activeInput || inputState?.inputValue?.trim()) ? 'top-[-0.4rem] text-sm ml-3 m-0' : ''
          }`}>
        <span className='bg-white px-2'>{label}</span>
      </label>}
      <input
        ref={inputRef}
        required={required}
        onChange={handleChange}
        value={inputState.inputValue}
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



const Button = ({ onClick, children,classname,disabeld }) => {
  return <button onClick={onClick } disabled={disabeld} className={`transition w-64 p-2 rounded ease-in-out text-white delay-150 bg-red-400 active:-translate-y-1 active:shadow-xl   duration-300 ${disabeld?'cursor-no-drop bg-red-200':' hover:scale-110 hover:bg-red-500'} ${classname}`}>
    {children}
  </button>
}



const Checkbox = ({ label, checked, onChange, className, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`inline-flex items-center cursor-pointer ${ className }`}>
      <div className={"relative"}>
        <input
          type="checkbox cursor-pointer"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheckbox}
          name={name}
        />
        <div className={`w-6 flex items-center justify-center h-6 border rounded-md ${ isChecked ? 'bg-blue-500' : 'bg-gray-300' }`}>
          <AiOutlineCheck />
        </div>
      </div>
      <span className="ml-2">{label}</span>
    </div>
  );
};


function CustomNavTabs({ navContainerArr }) {
  const [activeTab, setActiveTab] = useState(navContainerArr[0].tabName);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          {
            navContainerArr.map((el,i) =>
              <button
                key={i}
                onClick={() => changeTab(el.tabName)}
                className={`w-1/2 px-4 py-2 border-b-2 text-md ${ activeTab === el.tabName ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                  } focus:outline-none`}
              >
                {el.tabName}
              </button>
            )
          }
        </nav>
      </div>


      {navContainerArr.map((el,i) =>
        <div key={i} className={activeTab === el.tabName ? " flex flex-col" : 'hidden'}>
          <el.element props={el.elementProp} children={el.children}/>
        </div>
      )}
    </div>
  );
}

export { Input, Button, Checkbox, CustomNavTabs }
