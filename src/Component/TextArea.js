import React from 'react'
import Container from '@mui/material/Container';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';
const TextArea = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <Container maxWidth="xl">
        <Grid  container lg = {12} spacing={1}>
          <Grid item lg = {6} xs = {12}>
            <Textarea
              placeholder="Type in here…"
              value={text}
              onChange={(event) => setText(event.target.value)}
              minRows={2}
              maxRows={4}

              endDecorator={
                <Typography level="body3" sx={{ ml: 'auto' }}>
                  {text.length} character(s)
                </Typography>
              }
              sx={{
                height: "70vh",
                borderRadius: '6px'
              }}
            />
          </Grid>
          <Grid item lg={6} xs = {12}>
            <Card variant="outlined" sx={{ height: "70vh", borderRadius: '6px', boxShadow:"none"}}>
              <Typography level="body1">
                Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
                mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default TextArea
