import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import ContactsListView from "../components/contacts/ContactsListView";
import ContactsGridView from "../components/contacts/ContactsGridView";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Contacts = ({ sidebarOpen, setSidebarOpen }) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%">
      <InnerPageHeader
        title="Contacts"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        listView={listView}
        setListView={setListView}
      />

      {listView ? (
        <ContactsListView data={filledArray} />
      ) : (
        <ContactsGridView data={filledArray} />
      )}

      <InnerPageFooter
        pageNum={pageNum}
        setPageNum={setPageNum}
        pageChange={pageChange}
      />
    </Box>
  );
};

Contacts.Layout = InnerPageLayout;

export default Contacts;
