/*
 * @Author: GZH
 * @Date: 2021-08-07 12:12:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 12:23:02
 * @FilePath: \react-hook-proj\src\compoments\project-popover.tsx
 * @Description:
 */

import styled from "@emotion/styled";
import { List, Popover, Typography } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";
import { useProject } from "utils/project";

export default function ProjectPopover() {
  const { data: project, isLoading } = useProject();
  const pinnedProjects = project?.filter((project) => project.pin);
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((itme) => (
          <List.Item>
            <List.Item.Meta title={itme.name} />
          </List.Item>
        ))}
      </List>
    </ContentContainer>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      项目
    </Popover>
  );
}

const ContentContainer = styled.div`
  min-width: 30rem;
`;
