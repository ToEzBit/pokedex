import React from "react";
import Image from "next/image";
import { HStack, Circle } from "@styledSystem/jsx";
import { css } from "@styledSystem/css";

import SearchIcon from "@/assets/search.svg";
import { Input } from "@/components/cva";

export default function SearchBar() {
  return (
    <HStack gap="16px">
      <HStack
        bgColor="grayScale.white"
        rounded="16px"
        px="16px"
        py="8px"
        w="100%"
        shadow="inner"
      >
        <Image src={SearchIcon} width={16} height={16} alt="search icon" />
        <Input placeholder="Search" visual="primary" w="full" />
      </HStack>
      <Circle size="32px" bg="grayScale.white">
        <button className={css({ color: "identity.primary" })}>#</button>
      </Circle>
    </HStack>
  );
}
