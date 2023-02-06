import Footer from '../Footer/Footer'
import Links from '../links/Links'
import ErrorComponent from './ErrorComponent'
import ErrorHeading from './ErrorHeading'

function Error() {
  return (
    <>
        <Links />
        <ErrorHeading />
        <ErrorComponent />
        <Footer />
    </>
  )
}

export default Error