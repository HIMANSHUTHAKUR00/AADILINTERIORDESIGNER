import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-main'>
          <h1>AADIL INTERIOR DESIGNER.</h1>
          <p>© {new Date().getFullYear()} Aadil Designer. All Rights Reserved.</p>
        </div>

        <div className='footer-contact'>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:akramansari961@gmail.com">akramansari961@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+916394417796">+91-6394417796</a>,{" "}
            <a href="tel:+916366644170">+91-6366644170</a>{" "}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            <br /><a href='https://www.google.com/maps?q=82/3,+Doddanagamangala,+Chikkanagamangala+Main+Road,+Electronic+City+Post,+Bangalore,+Karnataka+560100'>82/3, Doddanagamangala, Chikkanagamangala Main Road, <br />
            Electronic City Post, Bangalore, Karnataka 560100 </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
