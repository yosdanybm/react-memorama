const boardStyle = (theme) => ({
  board: {
    flexGrow: 1,
  },
  paper: {
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
  },
});

export default boardStyle;
