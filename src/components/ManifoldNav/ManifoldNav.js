import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ManifoldNav.scss';

import { Collaborators } from './Collaborators';
import { MyNotes } from './MyNotes';
import { Librarian } from './Librarian';
import { Checkout } from './Checkout';

import { IconContext } from 'react-icons';
import { FaBook, FaUserGroup, FaFileLines, FaCartShopping } from 'react-icons/fa6';

export const ManifoldNav = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const nav = useNavigate();

  useEffect(() => {

  }, [currentTab]);

  const renderMenu = () => {
    switch (currentTab) {
      case 0:
        return <MyNotes />;
      case 1:
        return <Checkout />;
      case 2:
        return <Collaborators />;
      case 3:
        return <Librarian />;
      default:
        return <MyNotes />;
    }
  }

  const handleTabClick = (tabNum) => {
    const routes = [
      '/',
      '/checkout',
      '/collab',
      '/librarian',
    ]

    setCurrentTab(tabNum);
    nav(routes[tabNum]);
  }

  const getTabClass = (tabNumber) => {
    if (tabNumber === currentTab) {
      return 'tab-switch active';
    }

    return 'tab-switch';
  }

  return (
    <div className='manifold-nav py-3'>
      <div className='menu-container px-3'>
        {renderMenu()}
      </div>

      <div className='tab-switch-container pb-3'>
        <span onClick={() => handleTabClick(0)} className={getTabClass(0)}>
          <IconContext.Provider value={{ className: 'tab-switch-icon' }}>
            <div title='My Notes' className='icon-container'>
              <FaFileLines />
            </div>
          </IconContext.Provider>
        </span>

        <span onClick={() => handleTabClick(1)} className={getTabClass(1)}>
          <IconContext.Provider value={{ className: 'tab-switch-icon' }}>
            <div title='Checkout' className='icon-container'>
              <FaCartShopping />
            </div>
          </IconContext.Provider>
        </span>

        <span onClick={() => handleTabClick(2)} className={getTabClass(2)}>
          <IconContext.Provider value={{ className: 'tab-switch-icon' }}>
            <div title='Collaborate' className='icon-container'>
              <FaUserGroup />
            </div>
          </IconContext.Provider>
        </span>

        <span onClick={() => handleTabClick(3)} className={getTabClass(3)}>
          <IconContext.Provider value={{ className: 'tab-switch-icon' }}>
            <div title='Librarian' className='icon-container'>
              <FaBook />
            </div>
          </IconContext.Provider>
        </span>
      </div>
    </div>
  )
}
