import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// My created component
import Product from './assets/components/Product'
import Student from './assets/components/Student'
import Employee from './assets/components/Employee'
import Faculty from './assets/components/Faculty'
import Todo from './assets/components/Todo'


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* product card */}
      <section>
        <h1>Shopping Cart</h1>
        <div className='product-container'>
            <Product name="Iphone 12 Mini" price="800000" quantity="4"></Product>
            <Product name="Hp Laptop" price="900000" quantity="3"></Product>
            <Product name="Ipad Mini" price="850000" quantity="6"></Product>
            <Product name="Gaming Mouse" price="8000" quantity="2"></Product>
        </div>
      </section>

      {/* student card */}
      <section>
        <h1>Student List</h1>
        <div className='student-list'>
            <Student name="Afzal" roll="20" studentclass="7" section="A" blood="B+"></Student>
            <Student name="Adnan" roll="21" studentclass="7" section="A" blood="B-"></Student>
            <Student name="Abir" roll="22" studentclass="7" section="A" blood="AB+"></Student>
            <Student name="Ashik" roll="23" studentclass="7" section="A" blood="O-"></Student>
            <Student name="Atik" roll="24" studentclass="7" section="A" blood="B+"></Student>
            <Student name="Asif" roll="25" studentclass="7" section="A" blood="AB+"></Student>
            <Student name="Akib" roll="26" studentclass="7" section="A" blood="O+"></Student>
            <Student name="Amir" roll="27" studentclass="7" section="A" blood="B+"></Student>
        </div>
      </section>

      {/* employee record */}
      <section>
        <h1>Employee List</h1>
        <div className='employee-list'>
            <Employee name={'Jakir Ahamed'} age={35} designation={'Software Developer'} contact={'01632526708'}></Employee>
            <Employee name={'Jamil Islam'} age={30} designation={'UI Designer'} contact={'01642526788'}></Employee>
            <Employee name={'Safi Mondol'} age={35} designation={'Data Analyst'} contact={'01635267081'}></Employee>
            <Employee name={'Jakir Islam'} age={45} designation={'Senior Web Developer'} contact={'01632526748'}></Employee>
        </div>
      </section>

      {/* teacher record */}
      <section>
          <h1>Faculty List</h1>
          <div className='employee-list'>
              <Faculty name={'Anisur Rahman'} id={17181103} faculty={'Dep of CSE'} designation={'Sr.Lctr'}></Faculty>
              <Faculty name={'Suresh Jomadar'} id={17181143} faculty={'Dep of EEE'} designation={'Asst.Lctr'}></Faculty>
              <Faculty name={'Santona Rahman'} id={17181203} faculty={'Dep of Eng'} designation={'Sr.Lctr'}></Faculty>
              <Faculty name={'Partho Boruwa'} id={17181104} faculty={'Dep of CSE'} designation={'Asst.Lctr'}></Faculty>
          </div>
      </section>

      {/* task list */}
      <section>
        <h2>My Todo</h2>
        <div>
          <Todo task={'Learing Html'} complete = {true}></Todo>
          <Todo task={'Learing Css'} complete={true}></Todo>
          <Todo task={'Learing JavaScript'} complete={true}></Todo>
          <Todo task={'Learing React'} complete={false}></Todo>
        </div>
      </section>
    </>
  )
}

export default App
