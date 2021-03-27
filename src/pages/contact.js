import React from "react"
import Layout from "../components/Layout"
import { Card } from "antd"
import "./styles/contact.scss"
import { Form, Input, Button } from "antd"

const ContactPage = () => {
  // layout
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  // On form submit
  const onFinish = values => {
    console.log("Success:", values)
  }

  // On form submit failed
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div className="contact-container">
      <Layout />
      <Card
        title="Contact Me"
        bordered={false}
        style={{ width: 550 }}
        className="contact-card"
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "message"]}
            label="Message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              // type="primary"
              // htmlType="submit"
              className="hvr-sweep-to-right"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ContactPage
