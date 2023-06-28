import React from 'react';


const NavHeader = () => {
  return (
    <header className="reactHeader">
      <h1 className='mainName'>Header</h1>
            <nav>
              <ul className='listMenu'>
                <li><a className='linkPoint' href="#">Menu 1</a></li>
                <li><a className='linkPoint' href="#">Menu 2</a></li>
                <li><a className='linkPoint' href="#">Menu 3</a></li>
              </ul>
            </nav>
      </header>
  );
};

export default NavHeader;