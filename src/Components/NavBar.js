import React from 'react'

const NavBar = ({filerItem,menuList}) => {

  return (
    <>
    <nav className="navbar">
                <div className="btn-group">   
                     { menuList.map((currElement)=>{
                          return (
                            <button className="btn-group__item" onClick={() => filerItem(currElement)}>{currElement}</button>
                          )
                      })}

                </div>
            </nav>
    </>
  )
}

export default NavBar