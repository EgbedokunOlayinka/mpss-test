import { Grid } from "@chakra-ui/react";

const InnerPageGrid = ({ children, size }) => {
  return (
    <Grid
      my={12}
      templateColumns={["1fr", `repeat(auto-fill, minmax(${size}px, 1fr))`]}
      gap={8}
    >
      {children}
    </Grid>
  );
};

export default InnerPageGrid;
