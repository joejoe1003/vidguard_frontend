import React, { useState } from "react";
import {
  Button,
  Theme,
  Flex,
  Box,
  Section,
  Heading,
  TextField,
  Container
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navigator from "../navigator/index.js";

export default function BlockSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Theme>

      {/* 页面主要内容 */}
      <Section
        size="3"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* 标题 */}
        <Heading size="7" align="center">
          Block Search
        </Heading>
        <Flex gap="2" align="center">
          <TextField.Root
            size="3"
            placeholder="Enter block hash or number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="3" onClick={() => console.log(searchQuery)}>
            Search
          </Button>
        </Flex>
      </Section>
    </Theme>
  );
}
