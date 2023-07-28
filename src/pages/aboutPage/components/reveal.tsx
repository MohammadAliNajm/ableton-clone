import { Variant, motion, useAnimation, useInView } from 'framer-motion';
import { FC, useEffect, useRef } from 'react'

type Props = {
    children: JSX.Element;
    hidden: Variant;
    visible:Variant;
}

const Reveal: FC<Props> = ({ children,visible,hidden }) => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
        mainControls.start('visible')
     
        }
    }, [isInView])
    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: hidden,
                    visible: visible
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.75,delay:0.5}}
            >{children}
            </motion.div>
           
           
        </div>
    )
}

export default Reveal