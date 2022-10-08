import React from 'react'
import Button from '../../../../components/Button/Button'
import './Work.css'
import Data from '../../../../utils/Dummy'
import resume from '../../../../assets/portfolio_eng_ver_1.pdf'

const Work = () => {
  return (
    <section className='work-section'>
      <div onClick={()=> window.open(resume ,'_blank')} className='cv'>
      <Button  context="Download CV"/>
      </div>

      <div className='exp-wrapper'>
        <div className='exp-item left'>
            <div className='col'>
                <h3 className='col-h1'>Experience</h3>
                {Data.experiences.map(experience => (
                    <div key={experience.id} className='col-info'>
                    <span className='col-title'>{experience.title}</span>
                    <span className='col-date'>{experience.date}</span>
                    
                    {experience.description.map(desc =>(
                        <p key={desc.id} className='col-p'> {desc.text}</p>
                    ))}

                    {experience.customers.length > 0 
                    && <>
                        <span className='col-date'>Relevant Customers</span>
                        {experience.customers.map(customer=>(
                            <p key={customer.id} className='col-p'> {customer.text}</p>
                        ))}
                    </>
                    }
                    

                </div>
                ))}

            </div>
        </div>

        <div className='exp-item right'>
            <div className='col'>
                <h3 className='col-h1'>Education</h3>
                {Data.education.map(edu=>(
                    <div key={edu.id} className='col-info'>
                    <span className='col-title'>{edu.title}</span>
                    <span className='col-date'>{edu.date}</span>
                    <p className='col-p'> {edu.description}</p>
                </div>
                ))}

            </div>

            <div className='col'>
                <h3 className='col-h1'>Extra Activities</h3>
                {Data.activities.map(act=>(
                    <div key={act.id} className='col-info'>
                        <span className='col-title'>{act.title}</span>
                        <span className='col-date'>{act.subtitle}</span>
                        <span className='col-date'>{act.date}</span>
                        <p className='col-p'> {act.description}</p>
                    </div>
                ))}

            </div>
        </div>
    </div>

    <div className='cv' onClick={()=> window.open(resume ,'_blank')}>
        <Button context="Download CV"/>
    </div>

    </section>
  )
}

export default Work
