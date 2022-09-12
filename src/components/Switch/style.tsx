export {}
// import styled, { css } from 'styled-components';

// // Default
// const HANDLE_SIZE = '14px';

// // Get different colors for those cases
// // DefaultOn, DefaultCheckedOn, DefaultOff, DefaultCheckedOff
// // depending on (isDisabled, checked) props

// // Common style for both Default and Neutral Off state
// const getTrackOffBackground = isDisabled =>
//     css({
//         backgroundColor: isDisabled ? 'greys200' : 'greys600',
//         borderColor: isDisabled ? 'greys200' : 'greys600',
//     });

// // Default variant
// const getDefaultBackgroundStyles = ({ isDisabled, checked }) => {
//     if (checked) {
//         return css({
//             backgroundColor: isDisabled ? 'lt300' : 'primary',
//             borderColor: isDisabled ? 'lt300' : 'primary',
//         });
//     }
//     return getTrackOffBackground(isDisabled);
// };

// // NeutralOn, NeutralCheckedOn, NeutralOff, NeutralCheckedOff
// // Neutral variant
// const getNeutralBackgroundStyles = ({ isDisabled, checked }) => {
//     if (checked) {
//         return css({
//             backgroundColor: isDisabled ? 'greys400' : 'greys800',
//             borderColor: isDisabled ? 'greys400' : 'greys800',
//         });
//     }
//     return getTrackOffBackground(isDisabled);
// };

// export const SWrapper = styled.div`
//     display: inline-block;
//     align-items: center;
// `;

// export const SLabel = styled.span`
//     margin-left: ssm;
//     ${({ isDisabled }) =>
//         css({
//             color: isDisabled ? 'greys500' : 'greys800',
//         })};
//     ${({ size }) =>
//         css({
//             fontSize: size === 'small' ? 'md' : 'lg',
//         })};
// `;

// export const SSwitchWrapper = styled.label`
//     position: relative;
//     display: flex;
//     align-items: center;
//     ${({ isDisabled }) =>
//         css({
//             cursor: isDisabled ? 'not-allowed' : 'pointer',
//             pointerEvents: isDisabled ? 'none' : 'all',
//         })};
// `;

// /* Track and Handle */
// export const SSlider = styled.span`
//     position: relative;
//     display: block;
//     transition: default;
//     border-radius: ${HANDLE_SIZE};
//     border-style: solid;
//     border-width: default;
//     &::before {
//         position: absolute;
//         content: '';
//         border-radius: 50%;
//         transition: default;
//         background-color: white;
//     }
// `;

// export const SInput = styled.input`
//     opacity: 0;
//     visibility: 0;
//     width: 0;
//     height: 0;
// `;