import React,{ useState } from 'react'
import navbarContext from './NavbarContext';
export default function NavbarState(props) {
    const [menuHide, setMenuHide] = useState(true);
    const onClickHandle = () => {
        menuHide ? setMenuHide(false) : setMenuHide(true)
    };
  return (
    <navbarContext.Provider value={{menuHide, setMenuHide, onClickHandle}}>
      {props.children}
    </navbarContext.Provider>
  )
}
