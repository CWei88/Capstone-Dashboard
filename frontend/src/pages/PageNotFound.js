import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function PageNotFound() {
  return (
    <div>
      <Container sx={{ paddingLeft: { xs: 4, sm: 30 } }}>
        <Box sx={{ textAlign: "middle", marginTop: 16 }}>
          <SentimentVeryDissatisfiedIcon 
            sx={{ fontSize: 95, color: "#808080" }}
          />
        </Box>

        <Box sx={{ textAlign: "middle", marginTop: 4 }}>
          <Typography 
            variant="title"
            color="#808080"
            style={{
              fontSize: 100
            }}
          >
            404
          </Typography>
        </Box>

        <Box sx={{ textAlign: "middle", marginTop: 1 }}>
          <Typography 
            variant="title"
            color="#808080"
            style={{
              fontSize: 56
            }}
          >
            Page Not Found
          </Typography>
        </Box>

        <Box sx={{ textAlign: "middle", marginTop: 6 }}>
          <Typography 
            color="#808080"
            style={{
              fontSize: 30
            }}
          >
            The page you requested could not be found.
          </Typography>
        </Box>

      </Container>
    </div>
  )
}

export default PageNotFound;