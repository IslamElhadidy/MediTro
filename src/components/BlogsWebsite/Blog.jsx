import Footer from '../Footer/Footer'
import Links from '../links/Links'
import BlogsContent from './BlogsContent'
import BlogsHeading from './BlogsHeading'
import './slider.css'
function Blog() {
  return (
    <>
        <Links />
        <BlogsHeading />
        <BlogsContent />
        <div className="slider">
          <button>Prev</button>
          <button className='active'>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
        <Footer />
    </>
  )
}

export default Blog