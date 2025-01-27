import { motion } from 'framer-motion';

const page = () => {
    const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    };

    return (
    <motion.input
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        type="text"
        placeholder="Enter your text"
    />
    );
};

export default page;