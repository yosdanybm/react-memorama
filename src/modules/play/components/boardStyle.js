const boardStyle = (theme) => ({
  board: {
    flexGrow: 1,
    maxWidth: 700,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    width: 120,
    height: 120,
  },
});

export default boardStyle;
