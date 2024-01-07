import React from "react";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// import Container from "../../../components/Container";

// import Container from 'components/Container';

const mock = [
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    title: "Lorem ipsum dolor sit amet,",
    author: {
      name: "Clara Bertoletti",
      avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    date: "04 Aug",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
    description: "Excepteur sint occaecat cupidatat non proident",
    title: "Consectetur adipiscing elit",
    author: {
      name: "Jhon Anderson",
      avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    date: "12 Sep",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    title: "Labore et dolore magna aliqua",
    author: {
      name: "Chary Smith",
      avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
    date: "22 Nov",
  },
];

const VerticalMinimalDesignedBlogCards = () => {
  const theme = useTheme();
  const [length, setLength] = React.useState(5);

  const loadMoreHandler = () => {
    if (length <= 30) {
      setLength(length + 5);
    }
  };
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-[16px]">
        {mock.slice(0, length).map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={"a"}
              href={""}
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundImage: "none" }}
              >
                {/* <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 150, md: 150 },
                    position: "relative",
                  }}
                /> */}
                <div className="w-full h-[150px] bg-gray-600"></div>
                <Box component={CardContent} position={"relative"}>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {item.description}
                  </p>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={"flex"} flexDirection={"column"}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Avatar
                        className="w-8 h-8 bg-gray-600"
                        // src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <p className="text-sm text-gray-500">
                        {item.author.name}
                      </p>
                    </Box>
                    {/* <Typography color={"text.secondary"}>
                      {item.date}
                    </Typography> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={loadMoreHandler}
          className="bg-white hover:bg-[#1976D2] text-[#1976D2] hover:text-white flex mx-auto justify-center items-center border-2 border-[#1976D2] px-10 py-2 rounded-[5px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default VerticalMinimalDesignedBlogCards;
