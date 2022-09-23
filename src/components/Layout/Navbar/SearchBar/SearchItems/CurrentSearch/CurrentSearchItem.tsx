import React from 'react';
import { FaPlay } from 'react-icons/fa';

const CurrentSearchItem = ({searchResult} : any) => {
    const renderContent = () => {
        return (
            <>
                <div className="relative w-[52px] h-[52px] shrink-0 mr-2.5 cursor-pointer">
                    <img 
                        className={`w-full h-full ${searchResult.type === 'author' ? 'rounded-full' : 'rounded'} ${searchResult.type === 'song' && 'group-hover:opacity-50'}`}
                        src={searchResult.image} 
                        alt="" 
                        />
                    {searchResult.type === 'song' && <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block" />}
                </div>
                <div className="flex flex-col">
                    {searchResult.type === 'song' ? 
                        <a href={searchResult.href} className='font-semibold text-sm line-clamp-1 hover:text-[#c662ef] cursor-pointer'>{searchResult.name}</a> :
                        <span className='font-semibold text-sm line-clamp-1'>{searchResult.name}</span>
                    }
                    <span className="text-xs text-[#ffffff80] line-clamp-1">
                        {searchResult.type === 'album' && 'Album'}
                        {searchResult.type === 'author' && 'Nghệ sĩ'}
                        {searchResult.type !== 'song' && ' • '}
                        {searchResult.subtitle}
                    </span>
                </div>
            </>
        );
    }
    return (
        <li className='px-2.5 py-2 flex items-center hover:bg-[#ffffff1a] rounded group'>
            {searchResult.type !== 'song' ? 
                <a className='flex items-center w-full' href={searchResult.type !== 'song' ?searchResult.href : null}>
                    {renderContent()}
                </a>
            : renderContent()
            }
        </li>
    );
}

export default CurrentSearchItem;