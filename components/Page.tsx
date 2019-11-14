import Pages from "../util/Pages";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { store } from "../util/reducers";

const style = (
  <style>{`
 section {
   padding-top: 70px;
 }
`}</style>
);

function Page() {
  const [page, setPage] = useState("home");

  const getPageComponent = (page: string) => {
    const component = Pages.get(page);
    return component;
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setPage(store.getState().page);
    });
    return () => {
      unsubscribe;
    };
  });

  return (
    <>
      <Navbar />
      <section>{getPageComponent(page)}</section>
      {style}
    </>
  );
}

export default Page;
