import React, { useState, useEffect } from "react";
import TestPage from "../Components/Test/TestPage";
import Login from "../Components/Auth/Login";

type TestProps = {
  match: any;
};

type Page = "" | "like" | "dislike" | "search" | "randchoice" | "loading";

const Test = ({ match }: TestProps) => {
  const [page, setPage] = useState<Page>("");
  const loggedInfo = sessionStorage.getItem("username");
  useEffect(() => {
    setPage(match.params.detail || "");
  }, []);
  return (
    <main id="Test__Container">{!loggedInfo ? <Login /> : <TestPage />}</main>
  );
};

export default Test;
