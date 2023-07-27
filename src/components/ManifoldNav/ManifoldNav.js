import { useEffect, useState } from 'react';

import './ManifoldNav.scss';

import { Collaborators } from './Collaborators';
import { MyNotes } from './MyNotes';
import { Librarian } from './Librarian';
import { Checkout } from './Checkout';

export const ManifoldNav = () => {
  const [currentTab, setCurrentTab] = useState(0);

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
        <span onClick={() => setCurrentTab(0)} className={getTabClass(0)}></span>
        <span onClick={() => setCurrentTab(1)} className={getTabClass(1)}></span>
        <span onClick={() => setCurrentTab(2)} className={getTabClass(2)}></span>
        <span onClick={() => setCurrentTab(3)} className={getTabClass(3)}></span>
      </div>
    </div>
  )
}
