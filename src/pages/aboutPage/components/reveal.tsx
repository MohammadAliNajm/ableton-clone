import { motion, useAnimation, useInView } from 'framer-motion';
import { FC, useEffect, useRef } from 'react'

type Props = {
    children: JSX.Element;

}

const Reveal: FC<Props> = ({ children }) => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const slideControls1 = useAnimation();
    useEffect(() => {
        if (isInView) {
        mainControls.start('visible')
        slideControls.start('visible')
        }
    }, [isInView])
    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.75,delay:0.5}}
            >{children}
            </motion.div>
            <div style={{height:'800px'}}></div>
           
        </div>
    )
}

export default Reveal