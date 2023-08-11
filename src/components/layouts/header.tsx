import Image from "next/image";
import { css } from "@styledSystem/css";
import { HStack, Stack } from "@styledSystem/jsx";

import PokeballIcon from "@/assets/pokeball.svg";
import { SearchBar } from "@/components/ui/";

export default function Header() {
  return (
    <header
      className={css({
        p: "12px 12px 24px 12px",
        bg: "identity.primary",
      })}
    >
      <Stack gap="8px">
        <HStack gap="16px">
          <Image
            src={PokeballIcon}
            alt="pokeball icon"
            width={24}
            height={24}
          />
          <p
            className={css({
              color: "grayScale.white",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              textDecorationLine: "underline",
              fontStyle: "italic",
            })}
          >
            Pokédex
          </p>
        </HStack>
        <SearchBar />
      </Stack>
    </header>
  );
}
