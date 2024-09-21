import React from 'react'

function Footer() {
  return (
    <div className='sky pt-4 pb-16 text-white'>
        <footer className='w-[85%] mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-around mt-14'>
            <div className="leftside w-[18rem] md:w-[28rem]">
      <h1 className='font-bold text-4xl my-5'>MEMONHUB</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint fugit cum ipsa. Incidunt quos inventore cum nihil distinctio enim temporibus officiis. Quae, nesciunt. Architecto commodi illum suscipit voluptatem totam.</p>
            </div>
            <div className="centerSide">
        <h1>Company</h1>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Movies</li>
            <li>TV shows</li>
        </ul>
            </div>
            <div className="touch">
                <h1>Get In Touch</h1>
                <span>+1 1234567890</span><br />
                <span>memon@hub.com</span><br />
                <span>Telegram</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer
