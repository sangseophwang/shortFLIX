import React, { useState, useEffect } from "react";
import SelectButton from "../Components/Test/SelectButton";
import TestChoice from "../Components/Test/TestChoice";
import GenreChoice from "../Components/Test/GenreChoice";
import SearchChoice from "../Components/Test/SearchChoice";
import Loading from "../Components/Test/Loading";
import TestPage from "../Components/Test/TestPage";

type TestProps = {
  match: any;
};

type Page = "" | "like" | "dislike" | "search" | "randchoice" | "loading";

const Test = ({ match }: TestProps) => {
  const [page, setPage] = useState<Page>("");
  useEffect(() => {
    setPage(match.params.detail || "");
  }, []);
  console.log(page);
  return (
    <main id="Test__Container">
      <TestPage />
    </main>
  );
};

export default Test;
