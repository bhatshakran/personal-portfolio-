import React from "react"
import { Menu } from "antd"
import { Link } from "gatsby"
import {
  HomeOutlined,
  GithubOutlined,
  ContactsOutlined,
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  UserOutlined,
} from "@ant-design/icons"
import "antd/dist/antd.css"
import "./styles/Header.scss"
import { motion } from "framer-motion"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <div className="menu-container" style={{ width: 256 }}>
      <h2>Shaqran </h2>

      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        className="menubar"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<ContactsOutlined />}>
          Contact
        </Menu.Item>
        <Menu.Item key="3" icon={<GithubOutlined />}>
          Github
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          About
        </Menu.Item>
      </Menu>
      <div className="social-media">
        <motion.div
          whileHover={{
            transition: { duration: 0.3 },
            y: [-3, 0, 3, 0],
          }}
          className="social-icon"
        >
          <Link to="#">
            <InstagramOutlined />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            transition: { duration: 0.3 },
            y: [-3, 0, 3, 0],
          }}
          className="social-icon"
        >
          <Link to="#">
            <FacebookOutlined />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            transition: { duration: 0.3 },
            y: [-3, 0, 3, 0],
          }}
          className="social-icon"
        >
          <Link to="#">
            <WhatsAppOutlined />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
