import * as React from "react"
import { useEffect, useState } from "react"
import "./styles/HeroBanner.scss"
import { Typography } from "antd"
import TextTransition, { presets } from "react-text-transition"

const texts = ["Developer,", "and a Designer."]
const HeroBanner = () => {
  const { Title } = Typography
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    )

    // run the transition only for 9 seconds
    return setTimeout(() => clearInterval(intervalId), 9000)
  }, [])
  return (
    <div className="hero-container">
      <div className="hero-txt">
        <Title>
          Hi, I am a{" "}
          <TextTransition
            text={texts[index % texts.length]}
            springConfig={presets.slow}
          />
        </Title>
      </div>
    </div>
  )
}

export default HeroBanner
