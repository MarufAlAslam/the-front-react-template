import React from "react";
import Header from "../../components/header";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";
import Footer from "../../components/footer";
// import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
import { Box, Button, Typography } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";

const News = () => {
  const data = [
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
    {
      image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      title: "Lorem ipsum dolor sit amet,",
      author: {
        name: "Clara Bertoletti",
        avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
      },
      date: "04 Aug",
    },
  ];
  return (
    <div>
      <Header />
      <div className="py-10">
        <div className="container">
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            marginBottom={4}
          >
            <Box>
              <Typography fontWeight={700} variant={"h6"} gutterBottom>
                Latest stories
              </Typography>
              <Typography color={"text.secondary"}>
                Here’s what we’ve been up to recently.
              </Typography>
            </Box>
            <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
              <Box
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                marginLeft={2}
              >
                View all
              </Box>
            </Box>
          </Box>

          <div className="mt-10">
            {data.map((item, index) => (
              <div className="flex mb-10 justify-start items-center gap-8">
                <div className="img min-w-[200px] h-[200px] rounded-[10px] bg-gray-600"></div>
                <div className="content">
                  <h2 className="text-2xl font-bold uppercase">{item.title}</h2>
                  <p className="text-sm py-2 text-gray-400">
                    {item.author.name} - {item.date}
                  </p>

                  <p>{item.description}</p>

                  <div className="text-right">
                    <button className="text-[#1876D1] flex border-[#1876D1] border-0 justify-end items-center gap-2 ml-auto py-2 rounded-[10px]">
                      Read more <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1876D1] py-10">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default News;
