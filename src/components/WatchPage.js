import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
   
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(closeMenu());
    },[])

  return (
    <div >
      WatchPagedfddd
    </div>
  )
}

export default WatchPage;
