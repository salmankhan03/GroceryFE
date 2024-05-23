import React, { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListingComponents/ProductListingComponents';
import LeftSideBarComponents from '../../components/LeftSideBar/LeftSideBar';
import ProductServices from '../../services/ProductServices';
import { setProductList } from '../../redux/action/action';
import { useDispatch } from 'react-redux';
import NotFound from '../../components/NotFoundComponents/NotFoundComponents';
import Loading from '../../components/LoadingComponents/LoadingComponents';
import CategoryServices from '../../services/categoryService';
import { setCategoryList } from '../../redux/action/category-action';
import { setBrandList } from '../../redux/action/brand-action';
import Banner from "../../components/Banner";
import { useLocation } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import shopBanner from "../../assets/images/banner/shopBanner.jpg";

function ShopScreen() {
    const location = useLocation();
    const categoryId = location.state?.categoryId;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [defaultLimit] = useState(20);
    const [productDisplayLimit, setProductDisplayLimit] = useState();
    const [totalPages, setTotalPages] = useState();
    const [totalItems, setTotalItems] = useState();
    const [category, setCategory] = useState("");
    const [searchText, setSearchText] = useState("");
    const [sortedField, setSortedField] = useState("");
    const [productsListData, setProductsListData] = useState([]);
    const [categoriesData, setCategoriesData] = useState();
    const [brandData, setBrandData] = useState();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState([0, 0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState();
    const [selectedSortingOption, setSelectedSortingOption] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const categoryIds = parseInt(categoryId, 10);
        const updatedCategories = categoryIds
            ? [...selectedCategories, categoryIds]
            : selectedCategories.filter(id => id !== categoryIds);
        setSelectedCategories(updatedCategories);
    }, [categoryId]);

    const [availabilityData] = useState([
        { id: 4, name: 'exclude-from-catalog' },
        { id: 5, name: 'exclude-from-search' },
        { id: 6, name: 'featured' },
        { id: 7, name: 'outofstock' }
    ]);

    useEffect(() => {
        getCategoryList();
        getBrandList();
        getPriceFilter();
    }, []);

    useEffect(() => {
        const getselectedBrands = brandData?.filter(brand => selectedBrands.includes(brand.id));
        const selectedBrandNames = getselectedBrands?.map(brand => brand.name);
        let obj = {};
        if (selectedSortingOption) {
            obj.sort = { price: selectedSortingOption === "low" ? "asc" : "desc" };
        }
        let data = {
            "category": selectedCategories,
            "brands": selectedBrandNames,
            "price": filteredPrice[1] === null || filteredPrice[1] === undefined
                ? [0, maxPrice !== undefined ? JSON.parse(maxPrice) : 1000]
                : filteredPrice,
            ...(Object.keys(obj).length !== 0 && { sort: obj.sort }),
        }
        if (data?.brands?.length > 0 || data?.category?.length > 0 || (data?.price[1] !== 0 && data?.price[1] !== maxPrice)) {
            getfilterWiseProduct(data);
            setProductsListData([]);
        } else {
            setProductsListData([]);
            getProductsList(9, 1);
        }

    }, [selectedCategories, selectedBrands, filteredPrice, selectedSortingOption, selectedOption]);

    function getBrandList() {
        CategoryServices.getAllBrand({
            page: page,
            limit: defaultLimit,
        }).then((resp) => {
            if (resp?.status_code === 200) {
                dispatch(setBrandList([...resp?.list?.data]));
                setBrandData(resp?.list?.data);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    function getCategoryList() {
        CategoryServices.getAllCategory({
            page: page,
            limit: defaultLimit,
        }).then((resp) => {
            if (resp?.status_code === 200) {
                dispatch(setCategoryList([...resp?.tree?.data]));
                setCategoriesData(resp?.tree?.data);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    async function getfilterWiseProduct(data) {
        setLoading(true);
        await ProductServices.getfilterWiseProducts(data).then((resp) => {
            if (resp?.status_code === 200) {
                setProductsListData(resp?.list);
                setTotalItems(resp?.list?.length);
                setProductDisplayLimit(resp?.list?.length);
                setCurrentPage(1);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }

    async function getProductsList(limit, pages) {
        await ProductServices.getAllProducts({
            page: pages,
            limit: 9,
        }).then((resp) => {
            if (resp?.status_code === 200) {
                dispatch(setProductList({
                    ...resp?.list?.data
                }));
                setProductDisplayLimit(resp?.list?.per_page);
                if (productsListData?.length > 0 && pages !== 1) {
                    let updatedData = [...productsListData, ...resp?.list?.data];
                    let uniqueData = updatedData.filter((obj, index, self) =>
                        index === self.findIndex((t) => t.id === obj.id && t.name === obj.name));
                    setProductsListData(uniqueData);
                } else {
                    setProductsListData(resp?.list?.data);
                }

                setTotalPages(resp?.list?.last_page);
                setTotalItems(resp?.list?.total);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }

    function getPriceFilter() {
        ProductServices.getMaximumPrice().then((resp) => {
            if (resp?.status_code === 200) {
                const roundedMaxPrice = Math.ceil(parseFloat(resp?.max_price));
                setMaxPrice(roundedMaxPrice);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        setCurrentPage(1);
    };

    const handleSortingChange = (e) => {
        setSelectedSortingOption(e.target.value);
    };

    const fetchMoreData = () => {
        console.log("selectedBrands", selectedBrands)
        console.log("selectedCategories", selectedCategories)
        console.log("selectedSortingOption", selectedSortingOption)
        if (selectedBrands.length === 0 && selectedCategories.length === 0  && selectedSortingOption === undefined) {
            setTimeout(() => {
                getProductsList(9, currentPage + 1);
                setCurrentPage(currentPage + 1);
            }, 1500);
        }
    };

    return (
        <div>
            <Banner images={shopBanner} content={"SHOP"} />
            <div className="custom-header">
                <div className="row mt-3">
                    <div className="col-md-3 sidebar_hide mt-2">
                        <div className='m-2'>
                            <LeftSideBarComponents
                                categoriesData={categoriesData}
                                brandData={brandData}
                                availabilityData={availabilityData}
                                selectedCategories={selectedCategories}
                                setSelectedCategories={setSelectedCategories}
                                selectedBrands={selectedBrands}
                                setSelectedBrands={setSelectedBrands}
                                filteredPrice={filteredPrice}
                                setFilteredPrice={setFilteredPrice}
                                maximumPrice={maxPrice}
                            />
                        </div>
                    </div>
                    <div className="col-md-9 mt-2">
                        <div className="row mb-5">
                            <div className="col-md-6 col-xs-4 mt-1">
                                <div>
                                    Showing all {productsListData?.length} results
                                    <span className='ml-2'>
                                        <select
                                            id="simpleDropdown"
                                            value={selectedOption}
                                            onChange={handleChange}
                                            className='select-dropdown'
                                        >
                                            <option defaultValue={20} >20</option>
                                            <option value="12">12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-8 mt-1 text-right text-center-sm">
                                <select
                                    id="sortingDropdown"
                                    value={selectedSortingOption}
                                    onChange={handleSortingChange}
                                    className='select-dropdown'
                                >
                                    <option value="low">Sort by price: low to high</option>
                                    <option value="high">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <InfiniteScroll
                            dataLength={productsListData.length}
                            next={fetchMoreData}
                            hasMore={currentPage < totalPages}
                            // loader={<Loading skNumber={5} />}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <div className="row m-1">
                                {loading ? (
                                    <Loading skNumber={15} />
                                ) : (
                                    productsListData?.length > 0 ? (
                                        <div className='row'>
                                            {productsListData.map((i, index) => (
                                                <div key={index} className="col-lg-4 col-md-6 col-sm-6 mt-3" data-aos="zoom-in">
                                                    <ProductListing productItem={i} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <NotFound title="Sorry, There are no Products right now." />
                                    )
                                )}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopScreen;
