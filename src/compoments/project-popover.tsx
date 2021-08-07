/*
 * @Author: GZH
 * @Date: 2021-08-07 12:12:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 18:19:45
 * @FilePath: \react-hook-proj\src\compoments\project-popover.tsx
 * @Description:
 */

import styled from "@emotion/styled";
import { Divider, List, Popover, Typography } from "antd";
import React from "react";
import { useProjectModal } from "screens/project-list/util";
import { useProject } from "utils/project";
import { ButtonNoPadding } from "./lib";

export default function ProjectPopover() {
  const { open } = useProjectModal();
  const { data: project } = useProject();
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
      <Divider />
      <ButtonNoPadding type="link" onClick={open}>
        创建项目
      </ButtonNoPadding>
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
