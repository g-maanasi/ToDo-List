import { Box, Typography, TextField, Divider } from "@mui/material";

const ToDoPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    }}>
      <Box sx={{ alignItems: 'center', width: '50%'}}>
        <Typography variant="h4">Your Task List</Typography>
        <Divider orientation="horizontal" flexItem sx={{ mb: '1rem' }}/>
        <TextField
            id="outlined-multiline-flexible"
            label="Enter a task"
            multiline
            maxRows={4}
          />
      </Box>
    </Box>
  );
};

export default ToDoPage;
