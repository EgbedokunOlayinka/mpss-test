import { Grid, Box } from "@chakra-ui/react";
import InnerPageGrid from "../global/InnerPageGrid";
import ContactCard from "./ContactCard";

const ContactsGridView = ({ data, loading }) => {
  return (
    <InnerPageGrid size="190">
      {data.map((contact, index) => (
        <ContactCard contact={contact} key={index} loading={loading} />
      ))}
    </InnerPageGrid>
  );
};

export default ContactsGridView;
