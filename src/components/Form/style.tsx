import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const SForm = styled.form`
   display: flex;
   width: 100%;
   column-gap: 20px;
`

export const SInput = styled.input`
   padding: 0 15px;
   height: 42px;
   width: 100%;
   background: ${theme.lightGrey};
   color: ${theme.darkGrey};
   font-size: 14px;
   border-radius: 20px;
   border: 0;
   outline: none;
`

export const SButton = styled.button`
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 15px;
   height: 42px;
   background: ${theme.klaxoonPink};
   color: white;
   border: 0;
   outline: none;
   user-select: none;
   border-radius: 28px;
   font-size: 14px;
   cursor: pointer;
   transition: opacity .2s;

   &:hover {
      opacity: .7;
   }
`