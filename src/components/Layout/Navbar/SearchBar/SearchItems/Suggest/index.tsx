import React from 'react';
import SuggestItem from './SuggestItem';

const SuggestList = ({isSearching, searchWord} : any) => {
    const suggestList = [
        {name: 'chưa quên Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus eum facilis in eveniet rem modi fugit, aliquam similique quos veritatis officiis eos, laboriosam, ad officia sequi ut! Eum, hic.'},
        {name: 'mono'},
        {name: 'shut down'},
        {name: 'karaoke'},
        {name: 'ngủ ngon'},
        {name: 'XONE Radio'},
    ];

    const searchList = [
        {
            name: 'chưa quên',
            isSearched: true
        },
        {
            name: 'chưa quên người yêu cũ'
        },
        {
            name: 'chưa bao giờ em quên'
        },
        {
            name: 'chưa bao giờ'
        },
        {
            name: 'chưa từng thương ai đến vậy'
        }
    ];

    const renderSearchList = () => {
        if (!isSearching) {
            return (
                <ul>
                    {
                        suggestList.map((suggestItem, index) => {
                            return <SuggestItem key={index} name={suggestItem.name} isSearching={isSearching} searchWord={searchWord}/>
                        })
                    }
                </ul>
            );
        } else {
            return (
                <ul>
                    {
                        searchList.map((searchItem, index) => {
                            return <SuggestItem key={index} name={searchItem.name} isSearching={isSearching} isSearched={searchItem.isSearched} searchWord={searchWord}/>
                        })
                    }
                    <SuggestItem name={`Tìm kiếm "${searchWord}"`} isSearching={isSearching} searchWord={searchWord}/>
                </ul>
            )
        }
    }

    return (
        <>
            <div className="px-2.5 pb-2 font-bold">{!isSearching ? 'Đề xuất cho bạn' : 'Từ khóa liên quan'}</div>
            {renderSearchList()}
        </>
    );
}

export default SuggestList;