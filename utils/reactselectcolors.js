// export const colourOptions = [
//     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
//     { value: 'purple', label: 'Purple', color: '#5243AA' },
//     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//     { value: 'orange', label: 'Orange', color: '#FF8B00' },
//     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//     { value: 'green', label: 'Green', color: '#36B37E' },
//     { value: 'forest', label: 'Forest', color: '#00875A' },
//     { value: 'slate', label: 'Slate', color: '#253858' },
//     { value: 'silver', label: 'Silver', color: '#666666' },
//   ];

// Define the styles object
export const MultiStepSelectStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 4,
      fontSize: 24,
      lineHeight: 2,
    }),
  };
  
  // Define the theme object
  export const MultiStepSelectTheme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary75: 'lightBlue',
      primary: 'black',
    },
  });


// Merge the styles and theme objects into a single object
export const selectStylesAndTheme = {
    ...MultiStepSelectStyles,
    ...MultiStepSelectTheme,
  };