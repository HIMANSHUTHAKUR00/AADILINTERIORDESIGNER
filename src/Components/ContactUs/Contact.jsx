import './Contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='contact-container'>
      {/* 🔳 Page Overlay Fade-In */}
      <motion.div
        className="page-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Main content wrapper */}
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.h1
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 1.2}}
          viewport={{once: true}}
          className='contact-title'
        >
          <u>Contact <span className='yellow'>Us</span></u>
        </motion.h1>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 1.4}}
          viewport={{once: true}}
          className='contact-subtitle'
        >
          We'd love to hear from you! Get in touch with us for any inquiries or collaborations.
        </motion.p>

        <div className='contact-details'>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2, delay: 1.6}}
            viewport={{once: true}}
          >
            <h3>Email:</h3><a href="mailto:akramansari961@gmail.com"target="_blank"> akramansari961@gmail.com</a>
          </motion.p>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2, delay: 1.8}}
            viewport={{once: true}}
          >
            <h3>Phone:</h3><a href="tel:+91-6394417796" target="_blank"> +91-6394417796, +91-6366644170</a>
          </motion.p>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2, delay: 2}}
            viewport={{once: true}}
          >
            <h3>Address:</h3><a href="https://www.google.com/maps?q=82/3,+Doddanagamangala,+Chikkanagamangala+Main+Road,+Electronic+City+Post,+Bangalore,+Karnataka+560100"target="_blank">82/3, Doddanagamangala, Chikkanagamangala Main Road, Electronic City Post, Bangalore, Karnataka 560100</a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact