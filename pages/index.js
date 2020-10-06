import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);


  const HandleMenu = (str)=> {
    //capture what haoppened in the menu and change the page state based on it
    //alert(str);
    if(str === "bg") {
      setContentColor("#dca877");
    }
  }
  
  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor}>
        <h1>Welcome to my app</h1>
        <div>Hi</div>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
}