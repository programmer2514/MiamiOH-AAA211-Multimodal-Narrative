import React from 'react';
import PageBody from './PageBody.js';

export default function PageContainer({ page, setPage, children }) {

  function getPrev() {
    switch (page) {
      case 'Theoretical Framework':
        return 'Action Plan';

      case 'Research Process':
        return 'Theoretical Framework';

      case 'Action Plan':
        return 'Research Process';

      default:
        return null;
    }
  }

  function getNext() {
    switch (page) {
      case 'Theoretical Framework':
        return 'Research Process';

      case 'Research Process':
        return 'Action Plan';

      case 'Action Plan':
        return 'Theoretical Framework';

      default:
        return null;
    }
  }

  if (page == '') return (<></>);

  return (
    <>
      <a
        href='#'
        className='fixed top-0 left-0 bottom-0 right-0 z-40 bg-black opacity-80 cursor-default'
        aria-label='Back to main page'
        onClick={() => { setPage('') }}
      ></a>
      <a
        href='#'
        className='fixed top-1/2 left-0 translate-x-[calc(50vw-42rem-50%)] -translate-y-1/2 scale-y-150 text-white text-5xl z-50 [@media(max-width:87rem)]:hidden'
        role='button'
        aria-label='Previous page'
        onClick={() => { setPage(getPrev()) }}
      >
        &lt;
      </a>
      <PageBody setPage={setPage} title={page}>
        {children}
      </PageBody>
      <a
        href='#'
        className='fixed top-1/2 right-0 translate-x-[calc(50%-50vw+42rem)] -translate-y-1/2 scale-y-150 text-white text-5xl z-50 [@media(max-width:87rem)]:hidden'
        role='button'
        aria-label='Next page'
        onClick={() => { setPage(getNext()) }}
      >
        &gt;
      </a>
    </>
  )
}