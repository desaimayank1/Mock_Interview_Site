import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    navigate("/Book"); // Replace with your desired path
  };

  // const userData = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState({});
  const [buyState, setBuyState] = useState([0, 0, 0, 0, 0, 0]);
  const [buyCard, setBuyCard] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/success", { withCredentials: true });
      setUserData(response.data.user); // Set the user data here
    } catch (error) {
      console.log("getUser error:", error);
    }
  };

  // Fetch user data on mount
  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };
    fetchData();
  }, []);

  // Trigger BoughtCourses only when userData is available
  useEffect(() => {
    if (userData) {
      BoughtCourses();
    }
  }, [userData]);

  const BoughtCourses = async () => {
    console.log("BoughtCourses with userData:", userData);
    try {
      const response = await axios.get("http://localhost:3000/course", {
        params: { googleId: userData.googleId }
      });
      if (response) {
        console.log("Courses fetched:", response.data);
        const boughtcourse = response.data.map((course) => ({
          title: course.Title,
          description: course.Description,
          techStack: course.TechStack,
          imgSrc: course.Image,
          index: course.Index
        }));
        setBuyCard(boughtcourse);

        let newStates = [...buyState];
        boughtcourse.forEach((course) => {
          newStates[course.index] = 1;
        });
        setBuyState(newStates);
      } else {
        console.log("No course data found:", response);
      }
    } catch (error) {
      console.log("Error in BoughtCourses:", error);
    }
  };

  // console.log(buyCard)
  const addCourses = async (course, index) => {
    const newcourse = {
      UserId: userData.googleId,
      Title: course.title,
      Description: course.description,
      TechStack: course.techStack,
      Image: course.imgSrc,
      Index: index
    }

    try {
      const response = await axios.post("http://localhost:3000/course", newcourse)
      if (response) console.log("course added", response);
      else {
        console.log("something went wrong while adding course", response);
      }
    } catch (error) {
      console.log("addCourses", error)
    }
  }

  const handleBuyClick = (index, course) => {
    if (buyState[index] === 0) {
      const newStates = [...buyState];
      newStates[index] = 1;
      // console.log(course);
      setBuyCard(prev => [...prev, course])
      addCourses(course, index);
      setBuyState(newStates);
    }
  };



  const courses = [
    {
      title: "Data Science",
      description: "Basic Fundamental of Data Science",
      techStack: "Python, R, SQL",
      imgSrc: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      title: "Machine Learning",
      description: "Basic Fundamental of Machine Learning",
      techStack: "Pandas, Python, TensorFlow",
      imgSrc: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
      title: "Matlab",
      description: "Basic Fundamental of Matlab",
      techStack: "Git, Matlab-Desktop",
      imgSrc: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      title: "Web Development",
      description: "Basic Fundamental of Web Development",
      techStack: "HTML, CSS, JavaScript",
      imgSrc: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },

    {
      title: "VLSI Design",
      description: "Basic Fundamental of VLSI Design",
      techStack: "HTML, CSS, JavaScript",
      imgSrc: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },

    {
      title: "Python",
      description: "Basic Fundamental of Python",
      techStack: "HTML, CSS, JavaScript",
      imgSrc: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
  ];

  return (

    <>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello {userData.displayName}</h1>
            <p className="mb-5">
              Want to check out your preparation level for interview , Book a mock interview with
              a Tech person like yourself now by clicking down on book now
            </p>
            <button
              onClick={handleBookNowClick}
              className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-3 gap-10 p-5" >
        {buyCard.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

      <div className="overflow-x-auto p-10">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="font-extrabold text-black text-lg ">

              <th>Topic</th>
              <th>Description</th>
              <th>Tech stack</th>
              <th>Buy Now</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={course.imgSrc} alt={course.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-extrabold">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td>{course.description}</td>
                <td>{course.techStack}</td>
                <th>
                  <button
                    onClick={() => handleBuyClick(index, course)}
                    className="btn btn-outline btn-info"
                  >
                    {buyState[index] === 0 ? "Buy" : "Purchased"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </>
  )
}