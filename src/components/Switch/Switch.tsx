export {}
// import { useState, useEffect, ChangeEvent } from 'react';
// import { SWrapper, SSwitchWrapper, SLabel, SInput, SSlider } from './style';

// type Props = {
//     onSwitchChange: (boolean: boolean) => void,
//     isDisabled: boolean,
//     checked: boolean,
//     canParentComponentControlValue: boolean,
//     name: string | null,
//     label: string | null,
//     variant: 'default' | 'neutral',
//     size: 'default' | 'large' | 'small',
// };

// const Switch = ({
//     onSwitchChange,
//     isDisabled = false,
//     checked = false,
//     name = null,
//     label = null,
//     variant = 'default',
//     size = 'default',
//     canParentComponentControlValue = false
// }: Props) => {
//     const [inputChecked, setInputChecked] = useState(checked);

//     const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
//         const newValue = e.target.checked;
//         if (onSwitchChange) {
//             onSwitchChange(newValue);
//         }
//         setInputChecked(newValue);
//     };

//     useEffect(() => {
//         if (canParentComponentControlValue) {
//             setInputChecked(checked);
//         }
//     }, [checked, canParentComponentControlValue]);

//     return (
//         <SWrapper>
//             <SSwitchWrapper isDisabled={isDisabled}>
//                 <SInput
//                     isDisabled={isDisabled}
//                     type="checkbox"
//                     onChange={onChange}
//                     checked={inputChecked}
//                     name={name}
//                 />
//                 <SSlider
//                     data-testid="track"
//                     checked={inputChecked}
//                     isDisabled={isDisabled}
//                     variant={variant}
//                     size={size}
//                 />
//                 {label && (
//                     <SLabel size={size} isDisabled={isDisabled}>
//                         {label}
//                     </SLabel>
//                 )}
//             </SSwitchWrapper>
//         </SWrapper>
//     );
// };

// export default Switch;