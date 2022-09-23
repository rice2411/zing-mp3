import React from 'react';
import { FiTrendingUp, FiClock, FiSearch } from 'react-icons/fi';

const SuggestItem = ({name, isSearching, isSearched, searchWord}: any) => {
    const splitSuggestName = () => {
        const startPos = name.indexOf(searchWord);
        const endPos = startPos + searchWord.length;
        const beforeSearchWord = name.slice(0, startPos);
        const afterSearchWord = name.slice(endPos);
        return (
            <>
                {beforeSearchWord}
                <b>{searchWord}</b>
                {afterSearchWord}
            </>
        );
    };

    return (
        <li>
            <a href="#" className="px-2.5 py-2 w-full rounded flex items-center hover:bg-[#ffffff1a] hover:text-[#c662ef]">
                <span className='text-[#ffffff80]'>
                    {
                        !isSearching 
                        ? <FiTrendingUp /> 
                        : isSearched ?
                        <FiClock /> : 
                        <FiSearch />
                    }
                </span>
                <span className="ml-2.5 line-clamp-1">
                    {!isSearching ? name : splitSuggestName()}
                </span>
            </a>
        </li>
    );
};

export default SuggestItem;