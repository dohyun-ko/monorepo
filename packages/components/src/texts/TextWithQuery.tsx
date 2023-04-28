import React from "react";
import { useQuery } from "@tanstack/react-query";
import Text from "./Text";

export interface TextWithQueryProps {
  queryKey: string[];
  queryFn: ({ queryKey }: { queryKey: string[] }) => Promise<any>;
  textFn: (data: any) => string;
}

const TextWithQuery = ({ queryKey, queryFn, textFn }: TextWithQueryProps) => {
  const { data } = useQuery(queryKey, queryFn);

  if (data) {
    return <Text>{textFn(data)}</Text>;
  } else {
    return null; //TODO add skeleton
  }
};
