import React from 'react'
import { useDispatch } from 'react-redux';
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
import H_AllProduct from './../../hook/H_Product/H_AllProduct';
const SearchCountResult = ({title}) => {
    const handler = () => { }
    const [All_items_Prod , All_load_Prod , numberOfPages , countPage , handleSend ] = H_AllProduct()

    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item" onClick={handleSend}>الاكثر مبيعا</div>
                        <div className="border-bottom card-filter-item" onClick={handleSend}>الاعلي تقييما</div>
                        <div className="border-bottom card-filter-item" onClick={handleSend}>السعر من الاقل للاعلي</div>
                        <div className=" card-filter-item" onClick={handleSend}>السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
