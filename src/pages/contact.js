import "./styles/contact.scss"

import { Button, Form, Input } from "antd"
import React, { useState } from "react"

import { Card } from "antd"
import Layout from "../components/Layout"
import axios from "axios"
import { useForm } from "@formspree/react"

const ContactPage = () => {
  // formspree state
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: "",
        message: "",
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = e => {
    console.log(true)
    // e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: "https://formspree.io/f/xwkaeaoe",
      data: inputs,
    })
      .then(response => {
        console.log(status)
        handleServerResponse(
          true,
          "Thank you for contacting us, we will get back to you in 48hrs"
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
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
  console.log(status)
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
          onFinish={handleOnSubmit}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={handleOnChange} value={inputs.name} />
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
            <Input onChange={handleOnChange} value={inputs.email} />
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
            <Input.TextArea onChange={handleOnChange} value={inputs.message} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="submit"
              htmlType="submit"
              className="hvr-sweep-to-right"
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </Button>
          </Form.Item>
        </Form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </Card>
    </div>
  )
}

export default ContactPage
