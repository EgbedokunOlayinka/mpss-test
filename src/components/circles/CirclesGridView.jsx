import { Grid, Box } from "@chakra-ui/react";
import InnerPageGrid from "../global/InnerPageGrid";
import CircleCard from "./CircleCard";

const CiclesGridView = ({ data }) => {
  return (
    <InnerPageGrid size="340">
      {data.map((circle, index) => (
        <CircleCard circle={circle} key={index} />
      ))}
    </InnerPageGrid>
  );
};

export default CiclesGridView;
