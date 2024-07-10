import { animated, useSpring } from '@react-spring/web'

export default function AppExample() {

    const springs =  useSpring({
        from: { right: 0 },
        to: { x: 100 },
      })
    return <animated.div style={{
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor:"#fff",
        ...springs
    }}>
        
        <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width={720/3}
        height={1280/3}
        draggable="true"
        // src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>
    </animated.div>
}