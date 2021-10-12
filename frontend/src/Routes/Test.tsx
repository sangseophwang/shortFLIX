import React, { useState, useEffect } from "react";
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
