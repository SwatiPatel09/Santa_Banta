import React, { useState } from 'react'
import './style.css';
import Menu from './menuApi'
import CardItem from './CardItem';
import NavBar from './NavBar';


const uniqueList = [...new Set(Menu.map((currElement) => {
    return currElement.category;
})),"All"]

const Cards = () => {

    const [menuData, setMenuData] = useState(Menu);

    const [menuList,setmenuList]=useState(uniqueList)
    

    const filerItem = (category) => {

       document.title=`Santa-Banta(${category})`;

        if(category==="All"){
            setMenuData(Menu);
        }
        else{
        const updatedList = Menu.filter((currItem) => {
            return (currItem.category === category)
        })
        setMenuData(updatedList);
    }
    }

    return (
        <>
            <NavBar filerItem={filerItem} menuList={menuList}/>
            <CardItem menuData={menuData} />
        </>
    );
}

export default Cards