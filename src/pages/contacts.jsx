import React, { useState, useEffect } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import ContactsListView from "../components/contacts/ContactsListView";
import ContactsGridView from "../components/contacts/ContactsGridView";
import InnerPageFooter from "../components/global/InnerPageFooter";
import CustomAddButton from "../components/global/CustomAddButton";
import { connect, useSelector } from "react-redux";
import { getAllContacts } from "../store/contact/actions";
import AddNewContact from "../components/modals/AddNewContact";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Contacts = ({ sidebarOpen, setSidebarOpen, getAllContacts }) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const addContact = useSelector((state) => state.addContact);
  const { loading: addLoading, data: addData, error: addError } = addContact;

  const getContacts = useSelector((state) => state.getContacts);
  const { loading, data, error } = getContacts;

  useEffect(() => {
    getAllContacts();
  }, [addData]);

  const {
    isOpen: isOpenContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useDisclosure();

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%" px={6}>
      <InnerPageHeader
        title="Contacts"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        listView={listView}
        setListView={setListView}
      />

      {listView ? (
        <ContactsListView
          data={filledArray}
          data={data ? data : filledArray}
          loading={loading}
        />
      ) : (
        <ContactsGridView
          data={filledArray}
          data={data ? data : filledArray}
          loading={loading}
        />
      )}

      <InnerPageFooter
        pageNum={pageNum}
        setPageNum={setPageNum}
        pageChange={pageChange}
      />

      <CustomAddButton
        label="Add Contact"
        listView={listView}
        onClick={() => onOpenContacts()}
      />

      <AddNewContact
        isOpen={isOpenContacts}
        onOpen={onOpenContacts}
        onClose={onCloseContacts}
      />
    </Box>
  );
};

Contacts.Layout = InnerPageLayout;

// export default Contacts;

export default connect(null, { getAllContacts })(Contacts);
