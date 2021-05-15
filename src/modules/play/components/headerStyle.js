const headerStyle = (theme) => ({
  header: {
    background: 'linear-gradient(to right top, #104978, #3582b2, #3693ce)',
  },
  title: {
    padding: 15,
  },
  toolbar: {
    flexDirection: 'column',
  },
  players: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  countDown: {
    fontWeight: '600',
  },
});

export default headerStyle;
