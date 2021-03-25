import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import CirclesGridView from "../components/circles/CirclesGridView";
import CirclesListView from "../components/circles/CirclesListView";
import InnerPageFooter from "../components/global/InnerPageFooter";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Circles = ({ sidebarOpen, setSidebarOpen }) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%">
      <InnerPageHeader
        title="Circles"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        listView={listView}
        setListView={setListView}
      />

      {listView ? (
        <CirclesListView data={filledArray} />
      ) : (
        <CirclesGridView data={filledArray} />
      )}

      <InnerPageFooter
        pageNum={pageNum}
        setPageNum={setPageNum}
        pageChange={pageChange}
      />
    </Box>
  );
};

Circles.Layout = InnerPageLayout;

export default Circles;
