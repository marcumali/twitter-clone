import { useEffect, useRef, useState } from 'react';
import Avatar from '../molecule/avatar';
import { Icon } from '@iconify/react'; 
import Link from 'next/link';

const SearchResult = (props:any) => {

  const [RecentSearches, setRecentSearches] = useState([
    {
      id: 0,
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/32/32',
      link: '#'
    },
    {
      id: 1,
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/33/33',
      link: '#'
    },
  ]);

  const removeItem = (id:any) => {
    const newList = RecentSearches.filter( (l) => l.id !== id );
    setRecentSearches( newList );
  };

  const ref = useRef<any>(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  if(!props.show) return null;

  return (
    <div ref={ref} className="box-shadow-1 p-3 rounded-10px position-absolute bg-white w-100 top-32px z-index-1010">
      <div className="fw-600 mb-3 fs-14px">Recent Searches</div>
      {RecentSearches.map((item:any, index: number, RecentSearches ) => (
        <div key={item.id}>
          <div>{RecentSearches.length === 0 && 'No Recent Searches' }</div>
          <div className={"d-flex align-items-center justify-content-between " + (index + 1 === RecentSearches.length ? 'mb-0' : 'mb-3') }>
            <Link href={item.link}>
              <div className="d-flex align-items-center">
                <Avatar sm={30} md={40} src={item.avatar} className="me-2" />
                <div className="clamp clamp-1 text-base">{item.name}</div>
              </div>
            </Link>
            <div>
              <Icon icon="lucide:x" className="fs-16px cursor-pointer" onClick={ ()=> removeItem(item.id) }/>
            </div>
          </div>
        </div>
      ))}
    </div> 
  )
}

export default SearchResult