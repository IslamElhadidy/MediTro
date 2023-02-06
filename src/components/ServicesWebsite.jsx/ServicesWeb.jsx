import Acheiv from '../AboutWebsite/Acheiv'
import Doctors from '../AboutWebsite/Doctors'
import Footer from '../Footer/Footer'
import Links from '../links/Links'
import New from '../News/New'
import ServicesContent from './ServicesContent'
import ServicesHeading from './ServicesHeading'
function ServicesWeb() {
  return (
    <>
        <Links />
        <ServicesHeading />
        <ServicesContent />
        <Acheiv />
        <Doctors />
        <New />
        <Footer />
    </>
  )
}

export default ServicesWeb