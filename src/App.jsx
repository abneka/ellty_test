import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Checkbox } from 'antd'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const CustomCheckbox = ({ onChange, label }) => {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className='flex justify-between w-full cursor-pointer'
      onClick={toggleChecked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={(e) => setIsPressed(true)}
      onMouseUp={(e) => setIsPressed(false)}
    >
      <span>{label}</span>
      <div
        className={`border border-[#CDCDCD] w-6 h-6 flex justify-center items-center rounded-md cursor-pointer transition-colors ${checked ? isHovered? 'bg-[#366ad0]' : 'bg-blue-500' : isPressed ? 'border-[#878787]' : 'border-gray-200'}`}
      > 
          {checked ? <CheckOutlined style={{ color: '#fff' }} /> : isPressed ? <CheckOutlined style={{ color: '#878787' }} /> : isHovered ? <CheckOutlined style={{ color: '#E3E3E3' }} /> : ""}
      </div>
    </label>
  );
};

function App() {
  const [count, setCount] = useState(0)
  const [pages, setPages] = useState([false, false, false, false ,false, false, false])
  const updateAllPages = (checked) => {
    if(checked){
      setPages([true, true, true, true, true, true, true])
    }
    else{
      setPages([false, false, false, false, false, false, false])
    }
  }
  const updateVal = (cur) => {
    setPages(prevPages => {
      const temp = [...prevPages]; 
      temp[cur] = !temp[cur]; 
      return temp;
    });
  }

  return (
    <div className='h-screen bg-white w-full flex justify-center items-center font-Montserrat'>
      <div className='h-[326px] w-[370px] rounded-md p-5 grid gap-2' style={{ boxShadow: '0px 1px 10px -1px rgba(120,120,120,0.5)' }}>
        <div className='flex w-full justify-between items-center'>
            <CustomCheckbox label="All pages" className='pr-1' onChange={(cur)=> updateAllPages(cur)}/>
        </div>

        <div className='overflow-y-scroll hide-scrollbar h-[170px] border-t border-b border-[#CDCDCD] grid py-2'>
          {
            pages.map((page, i)=>{return <div className='py-2'><CustomCheckbox label={`page ${i+1}`} className='pr-1' onChange={(i)=> updateVal(i)}/> </div>})
          }
        </div>

        <div className='flex w-full justify-center'>
          <Button type='primary' size='large' className='bg-[#FFCE22] hover:!bg-[#FFD84D] border-none !text-[#1F2128] w-full'> Done </Button>
        </div>
      </div>
    </div>
  )
}

export default App
