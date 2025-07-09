import React, { useState } from "react";
import {
  Button,
  Theme,
  Flex,
  Box,
  Section,
  Heading,
  TextField,
  Text,
  Table,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./style.css"; // ✅ 引入同目录下的 style.css

export default function BlockSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(searchQuery);
  };

  return (
    <Theme>
      <Section
        size="3"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          paddingTop: "40px",
        }}
      >
        {/* 标题 */}
        <Heading size="7" align="center">
          Block Search
        </Heading>

        {/* 搜索栏 */}
        <Flex gap="2" align="center">
          <TextField.Root
            size="3"
            placeholder="Enter block hash or number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button
            size="3"
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
          >
            Search
          </Button>
        </Flex>

        {/* 信息框 */}
        <Flex gap="4" align="center" style={{ marginTop: "16px" }}>
          <Box className="info-box">
            <Text size="2" weight="bold" color="gray">
              Total blocks
            </Text>
            <Text size="5" weight="bold" style={{ marginTop: "8px" }}>
              1,234,567
            </Text>
          </Box>

          <Box className="info-box">
            <Text size="2" weight="bold" color="gray">
              Today's additions
            </Text>
            <Text size="5" weight="bold" style={{ marginTop: "8px" }}>
              1,234
            </Text>
          </Box>
        </Flex>

        {/* 表格区域 */}
        <Box style={{ marginTop: "32px", width: "100%", maxWidth: "800px" }}>
          <Table.Root className="striped-table">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Block Hash</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Upload Time</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Modify Time</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>0xabc1234fedcba9876543210</Table.RowHeaderCell>
                <Table.Cell>2025-07-08 09:15</Table.Cell>
                <Table.Cell>2025-07-08 09:20</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>0xdef5678abcde45678912345</Table.RowHeaderCell>
                <Table.Cell>2025-07-08 10:02</Table.Cell>
                <Table.Cell>2025-07-08 10:10</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>0x98765abc3210fedc654789a</Table.RowHeaderCell>
                <Table.Cell>2025-07-08 11:30</Table.Cell>
                <Table.Cell>2025-07-08 11:35</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>0xa1b2c3d4e5f60718273645a</Table.RowHeaderCell>
                <Table.Cell>2025-07-08 12:45</Table.Cell>
                <Table.Cell>2025-07-08 12:50</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>0xfedcba9876543210abcdef0</Table.RowHeaderCell>
                <Table.Cell>2025-07-08 14:20</Table.Cell>
                <Table.Cell>2025-07-08 14:33</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
      </Section>
    </Theme>
  );
}
