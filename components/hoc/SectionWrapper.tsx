import { motion } from "framer-motion";

const staggerContainer = () => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };
};

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 py-20 px-6 sm:px-16"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper; 