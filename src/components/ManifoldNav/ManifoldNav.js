import { useEffect, useState } from 'react';

import './ManifoldNav.scss';

import { Collaborators } from './Collaborators';
import { CurrentBooks } from './CurrentBooks';
import { Toolbar } from './Toolbar';

export const ManifoldNav = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {

  }, [currentTab]);

  const renderMenu = () => {
    switch (currentTab) {
      case 0:
        return <Toolbar />;
      case 1:
        return <CurrentBooks />;
      case 2:
        return <Collaborators />;
      default:
        return <Toolbar />;
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
        <span onClick={() => setCurrentTab(4)} className={getTabClass(4)}></span>
      </div>
    </div>
  )
}
