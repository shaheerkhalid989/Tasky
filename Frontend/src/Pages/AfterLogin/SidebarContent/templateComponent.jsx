import React from 'react'

const TemplateComponent = () => {

  return (
    <div className='flex flex-col h-screen'>
      <div className='mt-16 ml-16 flex flex-row text-xl text-gray-300 font-bold justify-between lg:space-x-96'>
        <h1>Featured Categories</h1>
        <div className='relative flex justify-end items-center'>
          <input type="text" placeholder="Search template" className="p-2 w-64 border border-gray-500 rounded bg-transparent text-gray-200 text-sm font-sans font-light focus:outline-none"/>
          {/* <svg width="24" height="24" className='absolute top-3 left-3 h-5 w-5 text-gray-400 pointer-events-none flex items-end' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7828 18.8276C12.3741 18.8298 13.9302 18.3601 15.2544 17.4781C16.5785 16.596 17.6112 15.3413 18.2216 13.8726C18.832 12.4039 18.9929 10.7872 18.6837 9.2271C18.3746 7.66702 17.6093 6.23364 16.4849 5.10831C15.3604 3.98299 13.9272 3.2163 12.3666 2.90525C10.8061 2.5942 9.18823 2.75277 7.71786 3.3609C6.24748 3.96902 4.99062 4.99937 4.10632 6.32158C3.22202 7.64379 2.75 9.19844 2.75 10.7888C2.75 12.919 3.59596 14.9621 5.10209 16.4693C6.60821 17.9766 8.65135 18.8248 10.7828 18.8276Z" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round"/>
            <path d="M16.4883 16.491L21.25 21.25" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round"/>
          </svg> */}
        </div>
      </div>
      {/* div for templates on screen */}
      <div className='flex flex-col mt-4 ml-12 text-white w-full h-full align-top space-x-3'>
        <div className='flex flex-row space-x-3'>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/3919e0fe0976de0298b4.svg" alt="" />
            <span>Business</span>
          </div>
          <div>
          <img className='h-28 w-28' src="https://trello.com/assets/157c58403db677619bea.svg" alt="" />
            <span>Design</span>
          </div>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/dea39a045ff4c4d1d9b1.svg" alt="" />
            <span>Education</span>
          </div>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/e0b1e866de40a5468aaa.svg" alt="" />
            <span>Engineering</span>
          </div>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/757286ddcfc9b405911a.svg" alt="" />
            <span>Marketing</span>
          </div>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/7d80b8fac2bac70d9e72.svg" alt="" />
            <span className='flex w-8'>Project Management</span>
          </div>
          <div>
            <img className='h-28 w-28' src="https://trello.com/assets/baf43674a6723cf78a2d.svg" alt="" />
            <span>Sales</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TemplateComponent