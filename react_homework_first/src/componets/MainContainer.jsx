import React from 'react';
import logo from '../images/spider-man.jpeg'

const MainContainer = () => {
  return (
    <main>
        <div className='container'>
            <p className='contentInformation'>
                Spider-Man
            </p>
            <img className='wallpaper' src={require('../images/spider-man.jpeg')} alt="Wallpaper" />
        </div>
    </main>
  );
};

export default MainContainer;