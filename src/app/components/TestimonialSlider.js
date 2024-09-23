"use client";

import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";

const testimonials = [
  {
    img: "https://picsum.photos/200",
    quote:
      "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    name: "Jessie J",
    role: "Acme LTD",
  },
  {
    img: "https://picsum.photos/200",
    quote:
      "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: "Nick V",
    role: "Malika Inc.",
  },
  {
    img: "https://picsum.photos/200",
    quote:
      "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: "Amelia W",
    role: "Panda AI",
  },
];

export default function FancyTestimonialsSlider() {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 5000;

  const handleAutorotate = () => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 === testimonials.length ? 0 : prevActive + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    handleAutorotate();
  }, [active, autorotate]);

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "900px",
        margin: "5rem auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "2rem",
          fontWeight: "bold",
          fontSize: "2rem",
          fontFamily: "'Sen', sans-serif",
          textAlign: "center",
          // Align the title with the services section
        }}
      >
        What Our Clients Say
      </Typography>

      {/* Testimonial Image */}
      <Box sx={{ position: "relative", height: "200px", marginBottom: "2rem" }}>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(9, 120, 254, 0.15), rgba(123,237,255,0))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={testimonials[active].name}
            src={testimonials[active].img}
            sx={{ width: 80, height: 80 }}
          />
        </Box>
      </Box>

      {/* Testimonial Quote */}
      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: "1rem",
          fontWeight: "normal",
          marginBottom: "1rem",
          fontFamily: "'Sen', sans-serif",
          color: "#333",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {`"${testimonials[active].quote}"`}
      </Typography>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
            sx={{
              width: "12px",
              height: "12px",
              backgroundColor: active === index ? "#3f51b5" : "#ccc",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}
