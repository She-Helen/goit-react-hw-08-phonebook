import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       minWidth: '0',
//     },
//   },
// }));

export function ButtonRemove({ type, id, onClick }) {
  // const classes = useStyles();
  return (
    <IconButton aria-label="delete" type={type} data-id={id} onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}
