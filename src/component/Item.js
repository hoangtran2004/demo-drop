import {getAll} from "../service/item-service";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import '../App.css'

function Items({currentItems}) {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                {currentItems && currentItems?.map((item, index) => (
                    <tbody key={index}>
                    <tr>
                        <td>{item?.id}</td>
                        <td>{item?.brand}</td>
                        <td>{item?.title}</td>
                        <td>{item?.category}</td>
                        <td>{item?.rating}</td>
                        <td>{item?.price}</td>
                        <td>{item?.description}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default function Item({itemsPerPage}) {
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch = useDispatch();
    const endOffset = itemOffset + itemsPerPage;
    const items = useSelector(state => {
        return state.item.item.products || []
    })
    const currentItems = items ? items.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
        dispatch(getAll())
    }, []);


    return (
        <>
            <Items currentItems={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className={'pagination-company'}
            />
        </>
    );
}