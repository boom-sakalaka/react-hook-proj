/*
 * @Author: GZH
 * @Date: 2021-08-07 12:02:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 18:08:38
 * @FilePath: \react-hook-proj\src\screens\project-list\project-modal.tsx
 * @Description:
 */
import { Button, Drawer } from "antd";
import React from "react";
import { useProjectModal } from "./util";

export default function ProjectModal() {
  const { projectModalOpen, close } = useProjectModal();
  return (
    <Drawer width={"100%"} visible={projectModalOpen} onClose={close}>
      <h1>Projcet Modal</h1>
      <Button onClick={close}> 关闭</Button>
    </Drawer>
  );
}
