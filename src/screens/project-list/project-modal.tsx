/*
 * @Author: GZH
 * @Date: 2021-08-07 12:02:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-07 23:33:39
 * @FilePath: \react-hook-proj\src\screens\project-list\project-modal.tsx
 * @Description:
 */
import styled from "@emotion/styled";
import { Button, Drawer, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { ErrorBox } from "compoments/lib";
import { UserSelect } from "compoments/user-select";
import React, { useEffect } from "react";
import { useAddProject, useEditProject } from "utils/project";
import { useProjectModal } from "./util";

export default function ProjectModal() {
  const { projectModalOpen, close, editingProject, isLoading } =
    useProjectModal();

  const title = editingProject ? "编辑项目" : "创建项目";

  const useMutateProject = editingProject ? useEditProject : useAddProject;
  const { mutateAsync, error, isLoading: mutateLoading } = useMutateProject();

  const [form] = useForm();
  const onFinish = (values: any) => {
    mutateAsync({ ...editingProject, ...values }).then(() => {
      form.resetFields();
      close();
    });
  };

  useEffect(() => {
    form.setFieldsValue(editingProject);
  }, [form, editingProject]);

  return (
    <Drawer
      forceRender={true}
      width={"100%"}
      visible={projectModalOpen}
      onClose={close}
    >
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Container>
          <h1>{title}</h1>
          <ErrorBox error={error} />
          <Form
            form={form}
            layout="vertical"
            style={{ width: "40rem" }}
            onFinish={onFinish}
          >
            <Form.Item
              label={"名称"}
              name={"name"}
              rules={[{ required: true, message: "请输入项目名" }]}
            >
              <Input placeholder={"请输入项目名称"} />
            </Form.Item>

            <Form.Item
              label={"部门"}
              name={"organization"}
              rules={[{ required: true, message: "请输入部门名" }]}
            >
              <Input placeholder={"请输入部门名"} />
            </Form.Item>

            <Form.Item label={"负责人"} name={"personId"}>
              <UserSelect defaultOptionName={"负责人"} />
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Button
                type={"primary"}
                htmlType={"submit"}
                loading={mutateLoading}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Container>
      )}
    </Drawer>
  );
}

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
