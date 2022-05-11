import "./about.scss"

export default function About() {
  const skill_stack = [
    "Javascript ES6+",
    "React.js",
    "HTML & CSS",
    "Python",
    "Java", 
    "AWS"
  ];

  return (
    <div className='about' id='about'>
      <div className="about-banner">
        /about
      </div>
      <div className="about-body">
        <div className="about-left">
          <div className="about-description">
          I am currently a software engineering student with a 
          focus in web development and some cloud infrastructure. 
          Last year, I acquired my <em>"AWS Certified Developer" </em> 
          certification. I continue to learn everyday whilst working
          a part time job at a pediatrics company.
          </div>
          <div className="about-skills">
            Here are some technologies I have been working with:
            <ul className="skill-list">
              {skill_stack.map(function (skill_item, i) {
                return ( 
                  <li>{skill_item}</li> 
                );
              })}
            </ul>
          </div>
          <div className="about-extra">
            Outside of school and work, I approach side projects like 
            this portfolio and I follow the developments of science. 
            I sometimes play video games and drive around in my car in 
            the weekends. 
          </div>
        </div>
        <div className="about-right">
          <img src="assets/me.jpg" alt="" className="me-jpg"></img>
        </div>
      </div>
    </div>
  )
}
