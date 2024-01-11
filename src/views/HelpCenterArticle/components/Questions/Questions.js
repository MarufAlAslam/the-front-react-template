import React from "react";
import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { colors } from "@mui/material";

const mock1 = [
  {
    title: "Authentication Issues",
    subtitle: "Issues related to logging in, out, or about multiple devices.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn’t my account stay logged in?",
    subtitle: "Issues related to authentication",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: "Issues related to renewal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why can't I upgrade for free?",
    subtitle: "Payment gateway related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn't my account stay logged in?",
    subtitle: "Login session related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
];
const mock2 = [
  {
    title: "Authentication Issues",
    subtitle: "Issues related to logging in, out, or about multiple devices.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn’t my account stay logged in?",
    subtitle: "Issues related to authentication",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: "Issues related to renewal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why can't I upgrade for free?",
    subtitle: "Payment gateway related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn't my account stay logged in?",
    subtitle: "Login session related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
];
const mock3 = [
  {
    title: "Authentication Issues",
    subtitle: "Issues related to logging in, out, or about multiple devices.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn’t my account stay logged in?",
    subtitle: "Issues related to authentication",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: "Issues related to renewal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why can't I upgrade for free?",
    subtitle: "Payment gateway related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn't my account stay logged in?",
    subtitle: "Login session related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
];
const mock4 = [
  {
    title: "Authentication Issues",
    subtitle: "Issues related to logging in, out, or about multiple devices.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn’t my account stay logged in?",
    subtitle: "Issues related to authentication",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "I'd like to renew but I am getting a 404 error.",
    subtitle: "Issues related to renewal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why can't I upgrade for free?",
    subtitle: "Payment gateway related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
  {
    title: "Why doesn't my account stay logged in?",
    subtitle: "Login session related issues",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!",
  },
];

const titles = [
  {
    title: "Title 1",
    subtitle: "subtitle 1",
  },
  {
    title: "Title 2",
    subtitle: "subtitle 2",
  },
  {
    title: "Title 3",
    subtitle: "subtitle 3",
  },
  {
    title: "Title 4",
    subtitle: "subtitle 4",
  },
  {
    title: "Title 5",
    subtitle: "subtitle 5",
  },
];

const Questions = () => {
  return (
    <div className="pt-10">
      <Box>
        <Box marginBottom={2}>
          <Typography fontWeight={600} variant={"h5"}>
            {titles[0].title}
          </Typography>
          <Typography color={"gray"} fontWeight={400} variant={"p"}>
            {titles[0].subtitle}
          </Typography>
        </Box>
        <Box>
          {mock1.map((item, i) => (
            <Box
              component={Accordion}
              key={i}
              paddingY={1}
              paddingX={0}
              elevation={0}
              sx={{
                "&:first-of-type": {
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
                "&:not(:first-of-type):before": {
                  opacity: "1 !important",
                  display: "block !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <Box
                component={AccordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-header--${i}`}
                padding={"0 !important"}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
              <AccordionDetails>
                <Typography>{item.text}</Typography>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <Box
                    component={Button}
                    color="primary"
                    size="small"
                    marginTop={2}
                    variant={"outlined"}
                    endIcon={
                      <Box
                        component={"svg"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width={24}
                        height={24}
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </Box>
                    }
                    sx={{ float: "right" }}
                  >
                    Contact support team
                  </Box>
                </Box>
              </AccordionDetails>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box marginBottom={2} marginTop={4}>
          <Typography fontWeight={600} variant={"h4"}>
            {titles[1].title}
          </Typography>
          <Typography color={"gray"} fontWeight={400} variant={"p"}>
            {titles[1].subtitle}
          </Typography>
        </Box>
        <Box>
          {mock2.map((item, i) => (
            <Box
              component={Accordion}
              key={i}
              paddingY={1}
              elevation={0}
              sx={{
                "&:first-of-type": {
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
                "&:not(:first-of-type):before": {
                  opacity: "1 !important",
                  display: "block !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <Box
                component={AccordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-header--${i}`}
                padding={"0 !important"}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
              <AccordionDetails>
                <Typography>{item.text}</Typography>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <Box
                    component={Button}
                    color="primary"
                    size="small"
                    marginTop={2}
                    variant={"outlined"}
                    endIcon={
                      <Box
                        component={"svg"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width={24}
                        height={24}
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </Box>
                    }
                    sx={{ float: "right" }}
                  >
                    Contact support team
                  </Box>
                </Box>
              </AccordionDetails>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box marginBottom={2} marginTop={4}>
          <Typography fontWeight={600} variant={"h4"}>
            {titles[2].title}
          </Typography>
          <Typography color={"gray"} fontWeight={400} variant={"p"}>
            {titles[2].subtitle}
          </Typography>
        </Box>
        <Box>
          {mock3.map((item, i) => (
            <Box
              component={Accordion}
              key={i}
              paddingY={1}
              paddingX={0}
              elevation={0}
              sx={{
                "&:first-of-type": {
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
                "&:not(:first-of-type):before": {
                  opacity: "1 !important",
                  display: "block !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <Box
                component={AccordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-header--${i}`}
                padding={"0 !important"}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
              <AccordionDetails>
                <Typography>{item.text}</Typography>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <Box
                    component={Button}
                    color="primary"
                    size="small"
                    marginTop={2}
                    paddingX={0}
                    variant={"outlined"}
                    endIcon={
                      <Box
                        component={"svg"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width={24}
                        height={24}
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </Box>
                    }
                    sx={{ float: "right" }}
                  >
                    Contact support team
                  </Box>
                </Box>
              </AccordionDetails>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box marginBottom={2} marginTop={4}>
          <Typography fontWeight={600} variant={"h4"}>
            {titles[3].title}
          </Typography>
          <Typography color={"gray"} fontWeight={400} variant={"p"}>
            {titles[3].subtitle}
          </Typography>
        </Box>
        <Box>
          {mock4.map((item, i) => (
            <Box
              component={Accordion}
              key={i}
              paddingY={1}
              elevation={0}
              sx={{
                "&:first-of-type": {
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
                "&:not(:first-of-type):before": {
                  opacity: "1 !important",
                  display: "block !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <Box
                component={AccordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-header--${i}`}
                padding={"0 !important"}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
              <AccordionDetails>
                <Typography>{item.text}</Typography>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <Box
                    component={Button}
                    color="primary"
                    size="small"
                    marginTop={2}
                    variant={"outlined"}
                    endIcon={
                      <Box
                        component={"svg"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width={24}
                        height={24}
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </Box>
                    }
                    sx={{ float: "right" }}
                  >
                    Contact support team
                  </Box>
                </Box>
              </AccordionDetails>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Questions;
