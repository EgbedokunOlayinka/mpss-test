import React, { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import CirclesGridView from "../components/circles/CirclesGridView";
import CirclesListView from "../components/circles/CirclesListView";
import InnerPageFooter from "../components/global/InnerPageFooter";
import CustomAddButton from "../components/global/CustomAddButton";
import CreateNewCircle from "../components/modals/CreateNewCircle";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Circles = ({ sidebarOpen, setSidebarOpen }) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%">
      <CreateNewCircle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

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

      <CustomAddButton
        label="Add Circle"
        listView={listView}
        onClick={() => onOpen()}
      />
    </Box>
  );
};

Circles.Layout = InnerPageLayout;

export default Circles;
