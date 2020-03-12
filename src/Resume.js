import React from 'react';
import data from './data.json';
import icon from './boy.svg';

let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info]
    console.log(person);
    return(
        <div className="parent">
          <div className="child">
          <img src={icon} alt="profile"/>
          <hr></hr>
    <h3>{person.basics.Name}</h3>
    <h3>{person.basics.email}</h3>
    <h3>{person.basics.Phone}</h3>
    <hr></hr>




          </div>
          <div className="child2">
              <h2> EDUCATIONAL QUALIFICATIONS </h2>  <hr></hr>
              {
                  person.education.map((i,j)=>(
                  <div key={j}>
                      <h3> {i.degree} </h3>
                      <ul>
                          <li> {i.Percent+"%"} </li>
                              <li> {i.institute} </li>
                      </ul>
                      </div>
                  ))}
                  <h2> SKILLS </h2>  <hr></hr>
                  {
                  person.skills.map((i,j)=>(
                  <div key={j}>
                      <h3> {i.type} </h3>
                      {i.values.map((k,l)=>(
                          <div key={l} style={{display:"inline"}}>
                              <span className="skill">{k}</span>
                              </div>

                      ))

                      }
                      </div>
                  ))}
          </div>
        </div>
    )
}
export default Resume;