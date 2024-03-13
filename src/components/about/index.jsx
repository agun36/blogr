import React from 'react'
import './style.scss'
import illustrationImg from '../../assets/images/illustration-editor-desktop.svg'
import illustrationImgMobile from '../../assets/images/illustration-editor-mobile.svg'
export const About = () => {
  return (
    <section className='about-wrapper'>
      <h1>Designed for the future</h1>
      <div className="about-wrapper__text">
        <div className='illustration-image'>
          <picture>
            <source srcSet={illustrationImg} type="image/webp" alt="illustration" media='( min-width: 768px)' />
            <img src={illustrationImgMobile} alt="illustration mobile" />
          </picture>
        </div>
        <div className='container-extension'>
          <div className='mb-6'>
            <h3 className='font-size-16 heading-color'>Introducing an extensible editor</h3>
            <p className='text-mt text-color'>
              Blogr features an exceedingly intuitive interface which lets you focus on
              one thing: creating content. The editor supports management of
              multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide
              easy ways to add functionality or change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className='font-size-16 heading-color'>Robust content management</h3>
            <p className='text-mt text-color'>
              Flexible content management enables users to move through posts. Increase
              the usability of your blog by adding customized categories, sections,
              format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
