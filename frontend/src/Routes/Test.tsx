import React, { useState, useEffect } from "react";
import SelectButton from "../Components/Test/SelectButton";
import TestChoice from '../Components/Test/TestChoice';
import GenreChoice from '../Components/Test/GenreChoice';
import SearchChoice from "../Components/Test/SearchChoice";



type TestProps = {
  match: any;
}

type page = '' | 'like' | 'dislike' | 'search' | 'randchoice' ; 

const Test = ({match}: TestProps) => {
  const [page, setPage] = useState('')
  useEffect(() => {
    setPage(match.params.detail || '')
  }, [])
  console.log(page)
  return (
    <div id='Test'>    
      {page === '' && <TestChoice isRandom={false} />}
      {page === 'like' && <GenreChoice isLike={true} />}
      {page === 'dislike' && <GenreChoice isLike={false} />}
      {page === 'search' && <SearchChoice />}
      {page === 'randchoice' && <TestChoice isRandom={true}/>}
    </div>
  );
};

export default Test;
