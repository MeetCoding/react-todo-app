import React from 'react';

const SearchPanel = props => (
    <div className="bg-white p-5 rounded-md border-yellow border-l-8">
        <div className="flex items-center mb-4">
            <label 
                htmlFor="search"
                className="font-montserrat font-bold text-lg"
            >Search: </label>
            <input
                type="text"
                id="search"
                onChange={e => props.setSearchQuery(e.target.value)}
                className="flex-grow flex-shrink min-w-0 mx-4 py-2 px-4 rounded-md font-shippori border-dark-purple focus:border-2"
            />
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                id="show-completed"
                defaultChecked={true}
                onChange={e => props.setShowCompleted(e.target.checked)}
                className="mx-2 w-4 h-4 text-dark-yellow"
            />
            <label 
                htmlFor="show-completed"
                className="font-shippori"
            >Show Completed Todos</label>
        </div>
    </div>
)

export default SearchPanel;