import React, { useState } from "react";
import { Box, Text, HStack, Icon, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import OrganizationsListView from "../components/organizations/OrganizationsListView";
import OrganizationsGridView from "../components/organizations/OrganizationsGridView";
import InnerPageFooter from "../components/global/InnerPageFooter";
import CustomAddButton from "../components/global/CustomAddButton";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Organizations = ({ sidebarOpen, setSidebarOpen }) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%">
      <InnerPageHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        listView={listView}
        setListView={setListView}
        title="Organizations"
      />

      {listView ? (
        <OrganizationsListView data={filledArray} />
      ) : (
        <OrganizationsGridView data={filledArray} />
      )}

      <InnerPageFooter
        pageNum={pageNum}
        setPageNum={setPageNum}
        pageChange={pageChange}
      />

      <CustomAddButton label="Add Organization" listView={listView} />
    </Box>
  );
};

Organizations.Layout = InnerPageLayout;

export default Organizations;
