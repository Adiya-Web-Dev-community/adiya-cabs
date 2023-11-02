import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
const SideBarNav = ({ navArr }) => {

    const [selectedNav, setSelectedGroupNev] = useState([])
    const [autoFindActivePath, setAutoFindActivePath] = useState(true)

    function toSetNavView(pathArr, type) {
        setSelectedGroupNev((prev) => {
            if (prev?.length && type !== 'Group') {
                return [...pathArr];
            } else if (prev?.length >= pathArr.length && pathArr.every((el) => prev.includes(el))) {
                return prev.slice(0, prev.indexOf(pathArr.at(-1)))
            } else if (type === 'Group' && !prev.every((el) => pathArr.includes(el))) {
                return [...pathArr];
            }
            else {
                return [...prev, ...pathArr];
            }
        });
    }

    const sidebarItem = (el, pathArr, selectedNavArr, index) => {

        const vlidation = selectedNavArr.includes(el.path)

        if (pathArr.includes(location.pathname) && autoFindActivePath) {
            setAutoFindActivePath(false)
            toSetNavView(pathArr, 'item');
        }
        return <Link
            onClick={(e) => {
                e.stopPropagation();
                toSetNavView(pathArr, 'item');
            }}
            to={el.path} key={index} className={`p-4 text-md cursor-pointer hover:bg-gray-400 
                 hover:text-white  transition ease-in duration-900 flex border-gray-100 ${ vlidation ? 'bg-gray-400 text-white' : '' }
                 `}>
            {el.icon ?
                <el.icon className='mr-2' size={17} /> : <div className='mr-2 w-4'></div>}
            {el.name}
        </Link>

    }

    const sidebarGroup = (el, pathArr, selectedNavArr, index) => {
        const vlidation = selectedNavArr.includes(el.path)

        return <div className={vlidation ? 'bg-gray-500 text-white' : ''}
            onClick={(e) => {
                e.stopPropagation();
                toSetNavView(pathArr, 'Group');
            }}
        >
            <div className={`p-4 text-md cursor-pointer hover:bg-gray-400  flex justify-between
                 hover:text-white  border-gray-100  transition ease-in duration-900  
                 `}>

                <div className='flex' >
                    {el.icon ? <el.icon className='mr-2' size={17} /> : <div className='mr-2'></div>}
                    {el.name}
                </div>
                {vlidation ? <BsChevronDown /> : <BsChevronUp />}
            </div>

            <div className={vlidation ? 'block' : 'hidden'}>
                {el.items.map((el, i) => el.items ? sidebarGroup(el, [...pathArr, el.path], selectedNav, i) : sidebarItem(el, [...pathArr, el.path], selectedNav, i))}
            </div>
        </div>

    }
    return (
        <div  >
            {navArr.map((el, i) => el.items ? sidebarGroup(el, [el.path], selectedNav, i) : sidebarItem(el, [el.path], selectedNav, i))}
        </div>
    )
}

export default SideBarNav


