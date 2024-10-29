import React from 'react';

export default function NavLink({ text, tabIndex, href, className }) {
  return (
    <a
      className={'ml-4 inline-block hover:opacity-75 active:opacity-50 after:block after:h-[2px] after:content-[\'\'] after:bottom-0 after:left-1/2 after:relative after:bg-black after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0 ' + className}
      target='_blank'
      aria-label={text + ' - Opens in a new window'}
      tabIndex={tabIndex}
      href={href}
      rel='noreferrer'
    >
      {text}
    </a>
  )
}