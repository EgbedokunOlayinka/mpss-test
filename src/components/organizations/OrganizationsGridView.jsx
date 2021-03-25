// import { Grid, Box } from "@chakra-ui/react";
import InnerPageGrid from "../global/InnerPageGrid";
import OrganizationCard from "./OrganizationCard";
import InnerPageFooter from "../global/InnerPageFooter";

const OrganizationsGridView = ({ data }) => {
  return (
    <InnerPageGrid size="190">
      {data.map((organization, index) => (
        <OrganizationCard organization={organization} key={index} />
      ))}
    </InnerPageGrid>
  );
};

export default OrganizationsGridView;
