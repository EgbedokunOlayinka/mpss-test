import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import InnerPageHeader from "../components/header/InnerPageHeader";
import OrganizationsListView from "../components/organizations/OrganizationsListView";
import OrganizationsGridView from "../components/organizations/OrganizationsGridView";
import InnerPageFooter from "../components/global/InnerPageFooter";
import CustomAddButton from "../components/global/CustomAddButton";
import AddNewOrganization from "../components/modals/AddNewOrganization";
import { connect, useSelector } from "react-redux";
import { getAllOrganizations } from "../store/organization/actions";

let filledArray = new Array(20)
  .fill("a")
  .map((num, index) => (index % 2 === 0 ? true : false));

const Organizations = ({
  sidebarOpen,
  setSidebarOpen,
  getAllOrganizations,
}) => {
  const [listView, setListView] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const getOrganizations = useSelector((state) => state.getOrganizations);
  const { loading, data, error } = getOrganizations;

  const addOrganization = useSelector((state) => state.addOrganization);
  const {
    loading: addLoading,
    data: addData,
    error: addError,
  } = addOrganization;

  useEffect(() => {
    getAllOrganizations();
  }, [addData]);

  const {
    isOpen: isOpenOrganizations,
    onOpen: onOpenOrganizations,
    onClose: onCloseOrganizations,
  } = useDisclosure();

  const pageChange = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <Box position="relative" h="100%" px={6}>
      <InnerPageHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        listView={listView}
        setListView={setListView}
        title="Organizations"
      />

      {listView ? (
        <OrganizationsListView
          data={data ? data : filledArray}
          loading={loading}
        />
      ) : (
        <OrganizationsGridView
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
        label="Add Organization"
        listView={listView}
        onClick={() => onOpenOrganizations()}
      />

      <AddNewOrganization
        isOpen={isOpenOrganizations}
        onOpen={onOpenOrganizations}
        onClose={onCloseOrganizations}
      />
    </Box>
  );
};

Organizations.Layout = InnerPageLayout;

// export default Organizations;

export default connect(null, { getAllOrganizations })(Organizations);
