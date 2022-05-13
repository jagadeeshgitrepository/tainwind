import styled from 'styled-components'

import tw from 'twin.macro'

export const HomeContainer = styled.div`
   ${tw` bg-cover mt-0 p-5	h-screen`};

   background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
`

export const HomeInnerContainer = styled.div`
   ${tw` w-1/2 border-solid  h-96 p-2`};
`

export const HomeHeading = styled.h1`
   ${tw` text-white text-4xl mt-5`};
`

export const HomeParagraph = styled.p`
   ${tw` text-white text-sm mt-5`};
`

export const FindJobsButton = styled.button`
   ${tw` text-white text-sm font-sans border-0 w-24 h-10  mt-5 rounded cursor-pointer`};
   background-color: #6366f1;
`
