import styled from "styled-components";
import Flex from "../containers/Flex";
import { colorSet } from "@common/theme";

const Chip = styled(Flex)`
  padding: 2px 5px;
  border-radius: 8px;
  background-color: ${colorSet.primary};
`;

export default Chip;
