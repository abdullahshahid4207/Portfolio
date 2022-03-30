import React from 'react'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import covid from '../assets/images/covid.jpg'
import quiz from '../assets/images/quiz.jfif'
import reactjs from '../assets/images/reactjs.jfif'

const Portfolio = () => {
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Cards animate="fade-right" title='Reactjs Projects →' className='card'
         src='https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg'/>
        <Cards animate="fade-bottom" link='https://abdullahshahid4207.github.io/covid19app/' className='card' src={covid} title='Covid App'/>
        <Cards animate="fade-left" link='https://abdullahshahid4207.github.io/Quizapp/' className='card' src={quiz} title='Quiz App'/>
        {/* <Cards link='https://quiz-app-7520a.web.app/' src={quiz} className='card animate__animated animate__backInDown' title='Covid App'/> */}
      </div>
      <br />
      <div className='container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 
      'center'}}>
        <Cards animate='fade-right' title='HTML Projects →' className='card' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdAi1JBLq3hEWOrh6_clYIUonlyvFKus8BhCPTM_mY53NE5yM2rr-r9Ohq-8CkB5eUNE&usqp=CAU'/>
        <Cards animate='fade-up' className='card' link='https://quiz-app-7520a.web.app/' 
        src={quiz} title='Quiz App'/>
        <Cards animate='fade-left' className='card' link='https://assignment08-ba9a6.web.app/' 
        src='http://rockcontent.com/wp-content/uploads/2021/02/interactive-calculator.png' 
        title='Calculator App'/>
        <Cards animate='fade-up' link='https://siddiquiaccessories.web.app/' src='https://www.businessprocessincubator.com/wp-content/uploads/thumbnails/thumbnail-43229.jpg' className='card' title='Website'/>
      </div>
    </>
  )
}

export default Portfolio;
