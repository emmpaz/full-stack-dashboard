import { Button, ButtonProps, styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#036016',
        borderWidth: '2px'
      },
      '&.Mui-focused fieldset':{
        borderColor: '#036016'
      }
    },
  });

  export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
  }));
  

//   export const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: '#036016',
//         borderWidth: '2px'
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   });