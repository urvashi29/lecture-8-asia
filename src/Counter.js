import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slices/counterSlice";
import { useGetAllPostsQuery, useGetPostByIdQuery } from "./slices/postApi";

const Counter = () => {
    //getting the data from slice(state)
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    // const responseData = useGetAllPostsQuery();
    // console.log(responseData);

    // const repsonseInfo = useGetPostByIdQuery(2);
    // console.log(repsonseInfo);

    return (
        <>
            <button onClick={() => dispatch(increment(10))}>+</button>
            {count}
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Counter;
