import { useEffect } from 'react';

function Navbar({ color }) {
 
  useEffect(() => {
    alert("Hey I will run on every render");
  }, []); // This will run only once when the component mounts

  useEffect(() => {
    alert("Hey Welcome to this page");
  }, []); // This will also run only once when the component mounts

  useEffect(() => {
    alert("Hey I am running because color changed");
  }, [color]); // This will run whenever the `color` prop changes

  return (
    <div className='nav'>
      I am Navbar of color {color} yooy!...
    </div>
  );
}

export default Navbar;