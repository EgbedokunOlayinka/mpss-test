import { Grid, Box } from "@chakra-ui/react";
import InnerPageGrid from "../global/InnerPageGrid";
import ContactCard from "./ContactCard";

const ContactsGridView = ({ data }) => {
  return (
    <InnerPageGrid size="190">
      {data.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </InnerPageGrid>
  );
};

export default ContactsGridView;
