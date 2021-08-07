/*
 * @Author: GZH
 * @Date: 2021-08-07 12:02:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 12:10:58
 * @FilePath: \react-hook-proj\src\screens\project-list\project-modal.tsx
 * @Description:
 */
import { Button, Drawer } from "antd";
import React from "react";

export default function ProjectModal(props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      width={"100%"}
      visible={props.projectModalOpen}
      onClose={props.onClose}
    >
      <h1>Projcet Modal</h1>
      <Button onClick={props.onClose}> 关闭</Button>
    </Drawer>
  );
}
