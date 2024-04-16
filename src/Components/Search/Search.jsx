import React from 'react'
import css from './Search.css'
import logo from '../../Images/logo.png'
import search from '../../Images/Search.png'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// function Search() {
//     return (
//         <section className='search-bar-container'>
//             <div className="container ">
//                 <img className='navbar-brand logo-3 img-fluid ' src={logo} alt="" />

//             </div>
//             <div className="container ">
//                 <div class="wrap">
//                     <div class="search">
//                         <input type="text" class="searchTerm" placeholder="What are you looking for?" />
//                         <button type="submit" class="searchButton">
//                          <img className='img-fluid' src={search} alt="" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Search

function Search() {
    // note: the id field is mandatory
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
{/* 
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <>
            <section className='search-bar-container'>
                <div className="container ">
                    <img className='navbar-brand logo-3 img-fluid ' src={logo} alt="" />
                </div>
                <div className="container ">
                    <div className ="wrap "style={{width:"70%"}}>
                        <div className ="wrapper mt-5">
                            <ReactSearchAutocomplete
                            className ="searchTerm "
                                items={items}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                autoFocus
                                formatResult={formatResult}
                                placeholder='What you seeking for'
                            />
                            <button type="submit" className ="searchButton">
                          <img className Name='img-fluid' src={search} alt="" />
                      </button>
                        </div>
                    </div>
                </div>
            </section>
                            
                            </>
    )
}

export default Search