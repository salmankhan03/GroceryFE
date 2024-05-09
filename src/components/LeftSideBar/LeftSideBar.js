import React, { useState } from 'react';
import ListComponents from '../ListComponents/ListComponents';
import ButtonComponent from '../ButtonComponents/ButtonComponents';
import PriceFilter from '../PriceFilterComponents/PriceFilterComponents';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import RangeSliderInput from '../PriceFilterComponents/PriceFilterComponents';
import InputComponent from '../InputComponents/InputComponents';
function LeftSideBarComponents({ categoriesData, brandData, availabilityData, selectedCategories, setSelectedCategories, selectedBrands, setSelectedBrands, filteredPrice, setFilteredPrice, maximumPrice }) {
  const [priceRange, setPriceRange] = useState([0, maximumPrice]);
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [brandSearchTerm, setBrandSearchTerm] = useState('');


  const handleDataChange = (event,) => {
    const dataType = event.target.dataset.datatype; // Access the 'datatypes' attribute
    console.log("types ==>", dataType)
    if (dataType === "Category") {
      const categoryId = parseInt(event?.target?.value, 10);
      const updatedCategories = event.target.checked
        ? [...selectedCategories, categoryId]
        : selectedCategories.filter(id => id !== categoryId);
      setSelectedCategories(updatedCategories);
    } else {
      const brandId = parseInt(event?.target?.value, 10);
      console.log(brandId)
      const updatedBrand = event.target.checked
        ? [...selectedBrands, brandId]
        : selectedBrands.filter(id => id !== brandId);
      setSelectedBrands(updatedBrand);
    }
  };
  const filteredCategories = categoriesData?.filter(category =>
    category.name.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );
  const filteredBrands = brandData?.filter(category =>
    category.name.toLowerCase().includes(brandSearchTerm.toLowerCase())
  );

  const handleSearchCategory = (event) => {
    console.log(event)
    setCategorySearchTerm(event.target.value);
  };
  const handleSearchBrand = (event) => {
    console.log(event)
    setBrandSearchTerm(event.target.value);
  };
  const handleClearSearch = () => {
    setCategorySearchTerm('');
  };
  const handleClearBrand  = () => {
    setBrandSearchTerm('');
  };
  return (
    <div >
      <div className="m-3">
        <h4>Product Categories</h4>
        <div className='mt-4'>
          <div className='mb-3 position-relative '>
            <InputComponent
              type="text"
              id="searchCategories"
              customClass={`form-control gray-bg `}
              value={categorySearchTerm}
              onChange={handleSearchCategory}
              placeholder="Search categories..."
            />
            {categorySearchTerm && (
              <div className="position-absolute top-0 end-0 translate-middle-y"
                style={{marginTop:20,marginRight:10}}
                onClick={handleClearSearch}>
                <i className="fas fa-times"></i>
              </div>
            )}
          </div>
          <div className='mt-3' style={{ height: 250, overflow: 'auto' }}>
            <ListComponents
              data={filteredCategories}
              selectedData={selectedCategories}
              handleDataChange={handleDataChange}
              datatypes="Category"
            />
          </div>
        </div>
      </div>
      <div className='mt-5 m-3'>
        <h4>Filter by Price</h4>
        <div className='mt-4'>
          <RangeSliderInput min={0} max={maximumPrice} values={priceRange} filteredPrice={filteredPrice} setFilteredPrice={setFilteredPrice} />
        </div>
      </div>
      <div className="mt-5 m-3">
        <h4>Brands</h4>
        <div className='mt-4'>
          <div className='mb-3 position-relative'>
            <InputComponent
              type="text"
              id="searchCategories"
              customClass={`form-control gray-bg`}
              value={brandSearchTerm}
              onChange={handleSearchBrand}
              placeholder="Search Brands..."
            />
             {brandSearchTerm && (
              <div className="position-absolute top-0 end-0 translate-middle-y"
                style={{marginTop:20,marginRight:10}}
                onClick={handleClearBrand}>
                <i className="fas fa-times"></i>
              </div>
            )}
          </div>
          <div className='mt-3' style={{ height: 250, overflow: 'auto' }}>
            <ListComponents
              data={filteredBrands}
              selectedData={selectedBrands}
              handleDataChange={handleDataChange}
              datatypes="Brand"
            />
          </div>
        </div>
      </div>
      {/*  <div className="mt-2">
                <h4>Availability</h4>
                <ListComponents
                data={availabilityData}
                selectedData={selectedCategories}
                handleDataChange={handleDataChange}
                />
            </div> */}

    </div >
  );
}
export default LeftSideBarComponents;
