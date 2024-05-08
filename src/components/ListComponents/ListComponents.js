import React, { useState } from 'react';

const ListComponents = ({ data, selectedData, handleDataChange, datatypes }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [visibleRecords, setVisibleRecords] = useState(5); // Initially show 5 records

  const handleToggleExpand = (itemId) => {
    setExpandedItems((prevExpanded) => {
      if (prevExpanded.includes(itemId)) {
        return prevExpanded.filter((id) => id !== itemId);
      } else {
        return [...prevExpanded, itemId];
      }
    });
  };

  const handleLoadMore = () => {
    setVisibleRecords((prevVisible) => prevVisible + 5); // Increase visible records by 5
  };

  const renderCategory = (category) => {
    const isExpanded = expandedItems.includes(category.id);

    return (
      <div key={category.id}>
        <div className='d-flex justify-content-between' onClick={() => handleToggleExpand(category.id)}>
          <label>
            <input
              type="checkbox"
              value={category.id}
              checked={selectedData.includes(category.id)}
              data-datatype={datatypes} 
              onChange={handleDataChange}
            />
            <span className='pl-2'>{category?.name}</span>
          </label>
          {category?.children?.length > 0 && (
            <span>
              <i className={`fa fa-angle-${isExpanded ? 'down' : 'right'}`}></i>
            </span>
          )}
        </div>
        {category?.children && isExpanded && (
          <div className='margin-left'>
            {category?.children.slice(0, visibleRecords).map((child) => renderCategory(child))}
          </div>
        )}
      </div>
    );
  };

  const initialRender = data?.slice(0, visibleRecords).map((category) => renderCategory(category));

  return (
    <div className="product-category-sidebar">
      {initialRender}
      <div className="load-more-container">
        {data?.length > visibleRecords && (
          <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
        )}
      </div>

    </div>
  );
};

export default ListComponents;
