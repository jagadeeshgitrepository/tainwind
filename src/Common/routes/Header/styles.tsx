import styled from 'styled-components'

import tw from 'twin.macro'

export const NavContainer = styled.nav`
   ${tw`flex flex-row items-center h-20`};
   justify-content: space-around;
   background-color: #272727;
`

export const UnorderedList = styled.ul`
   ${tw`list-none	flex flex-row items-center text-white w-screen`}
   padding-right:20%;
   justify-content: space-around;
`

export const WebsiteLogo = styled.img`
   ${tw` w-24`}
`

export const LogOutButton = styled.button`
   ${tw` border-0 text-white font-sans w-24 h-7 rounded cursor-pointer`}
   background-color: #4f46e5;
`
