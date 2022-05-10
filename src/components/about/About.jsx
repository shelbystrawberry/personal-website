import "./about.scss"

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="about-banner">
        /about
      </div>
      <div className="about-body">
        <div className="about-left">
        I am currently a software engineering student with a 
        focus in web development and some cloud infrastructure. 
        Last year, I acquired my <em>"AWS Certified Developer" </em> 
        certification. I continue to learn everyday whilst working
        a part time job at a pediatrics company.
        </div>
        <div className="about-right">
          <img src="assets/me.jpg" alt="" className="me-jpg"></img>
        </div>
      </div>
    </div>
  )
}
