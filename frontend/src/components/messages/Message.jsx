import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src='https://i.pinimg.com/originals/76/08/41/76084173d1c00cf755a3530aa422bb2e.gif' />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500`}>Hi whatsup bro! the winter is coming</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> 12:12</div>
		</div>
  )
}

export default Message