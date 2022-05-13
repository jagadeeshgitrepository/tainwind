import styled from 'styled-components'

import tw from 'twin.macro'

export const TailwindContainer = styled.div`
   ${tw`flex flex-col items-center justify-center h-screen bg-black`}
`
export const TailwindLoginContainer = styled.div`
   ${tw`bg-white h-2/4 w-1/4 rounded p-2`};
   & {
      background-color: #272727;
   }
`

export const TailwindImageContainer = styled.div`
   ${tw`flex flex-col items-center justify-center `}
`
export const TailwindImage = styled.img`
   ${tw` w-1/4  mt-10 h-3/4`};
`

export const TailwindFormContainer = styled.form`
   ${tw`flex flex-col items-start bg-transparent mt-2 justify-start pl-10 `}
   height:350px;
`

export const TailwindFormLabel = styled.label`
   ${tw`text-sm text-white mt-10 mb-2  font-sans`}
`

export const TailwindFormInput = styled.input`
   ${tw`bg-transparent text-white border-solid	pl-2 placeholder-gray-700 font-sans w-4/5 h-12 rounded `}
   border-width:0.5px;
   border-color: #cbd5e1;
`
export const TailwindFormSubmit = styled.button`
   ${tw`bg-blue-600	font-sans border-solid	h-10 text-white mt-10 w-4/5 rounded `}
`
export const TailwindFormError = styled.p`
   ${tw`font-sans `}
   color: #ef4444;
`
