import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

const Pageinations = (props)=>{
    const [active, setActice]=useState(true);
    let pageNumbers=useState([]);

    const pageinate=(pageNumber)=>{
        setActice(pageNumber);
        props.pageinateNumber(pageNumber);
    }

    for(let index = 1; index <= Math.ceil(props.totalPosts / props.postPerPage);index++)
    {
        pageNumbers.push(index);
        console.log("pageNumbers",pageNumbers[1])
    }

    return(
        <div className="pageInition">
            {
                pageNumbers.map((number) => (
                    <div key={number}>
                    <Pagination id="pageinit">
                        <Pagination.Item onClick={() => pageinate(number)} active={number == active}>
                        {number}
                        </Pagination.Item>
                    </Pagination>
                    </div>
                ))
            }
        </div>
    )
}

export default Pageinations;