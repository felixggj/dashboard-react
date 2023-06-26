import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum testinng the fact that I am learning quite a lot of
            react recently etc etc et etc and it can be nice to become an expert
            in this tech stack distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some other extremely relevant question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum testinng the fact that I am learning quite a lot of
            react recently etc etc et etc and it can be nice to become an expert
            in this tech stack distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Just another great question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum testinng the fact that I am learning quite a lot of
            react recently etc etc et etc and it can be nice to become an expert
            in this tech stack distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A unique question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum testinng the fact that I am learning quite a lot of
            react recently etc etc et etc and it can be nice to become an expert
            in this tech stack distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Beautiful question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum testinng the fact that I am learning quite a lot of
            react recently etc etc et etc and it can be nice to become an expert
            in this tech stack distribution.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
