import React from 'react'
import Navbar from './Navbar'
import Subject from './Subject'
import { Grid , Button} from '@mui/material'
import { useState } from 'react'
import SelectSem from './SelectSem'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Home({handleDarkMode , mode}) {

    // const [mode , setMode] = useState('light');

    const navigate = useNavigate();
    const [selectedSemester, setSelectedSemester] = useState('');

    const handleSemesterChange = (semseter)=>{
        setSelectedSemester(semseter);
    }
    // const handleDarkMode = ()=>{
    //     if(mode === 'light'){
    //         setMode('dark');
    //     }
    //     else{
    //         setMode('light');
    //     }
    // }

    const subjectsData = [
        {
            title: "Linear Algebra",
            description: "LA notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2020/07/01/20/11/black-5360842_1280.jpg",
            semester : 1,
        },
        {
            title: "Engineering Physics",
            description: "Engineering Physics notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2022/01/14/07/50/physics-6936704_1280.jpg",
            semester : 1,
        },
        {
            title: "Problem Solving With Programming",
            description: "Problem Solving With Programming notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2022/06/01/16/26/software-7236161_1280.png",
            semester : 1,
        },
        {
            title: "Technical Communication Skills",
            description: "Technical Communication Skills notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2012/04/14/16/55/notebook-34599_1280.png",
            semester : 1,
        },
        {
            title: "Fundamentals of Electrical and Electronics Engineering",
            description: "Fundamentals of Electrical and Electronics Engineering notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2024/07/14/06/42/groove-box-8893757_1280.png",
            semester : 1,
        },
        {
            title: "Web Development",
            description: "Web Development notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
            semester : 2,
        },
        {
            title: "Computer Organisation and Architecture",
            description: "Computer Organisation and Architecture notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_1280.png",
            semester : 2,
        },
        {
            title: "Data Structure and Algorithms",
            description: "Data Structure and Algorithms notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2021/03/11/12/58/laptop-6087062_1280.png",
            semester : 2,
        },
        {
            title: "Operating System",
            description: "Operating System notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2018/04/30/08/13/update-3362089_1280.jpg",
            semester : 3,
        },
        {
            title: "Software Engineering",
            description: "Software Engineering notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2020/07/25/16/09/laptop-5437167_1280.png",
            semester : 3,
        },
        {
            title: "Probability and Statistics",
            description: "Probability and Statistics notes and questions.",
            imageUrl: "https://cdn.pixabay.com/photo/2020/09/23/03/54/background-5594879_1280.jpg",
            semester : 3,
        },

    ];

    const filteredSubjects = selectedSemester
    ? subjectsData.filter((subject) => subject.semester === (selectedSemester))
    : subjectsData;

    const containerStyle = {
        backgroundColor: mode === 'dark' ? '#202529' : '#f5f5f5',
        color: mode === 'dark' ? '#ffffff' : '#000000',
        minHeight: '100vh',
        padding: '20px', 
      };

    return (
        <>
            <Navbar handleDarkMode={handleDarkMode} mode = {mode}/>
            <div style={containerStyle}>
            <SelectSem onSemesterChange={handleSemesterChange} />   
            <Button variant = "contained"
                sx = {{
                    position: 'absolute', 
                    top: '10vmin', 
                    right: '3vmin', 
                    textAlign: 'center',
                    marginTop : '3vmin'
                }}
                onClick={()=>{navigate('/upload')}}
            >
                Uplaod Your Notes
            
            </Button>         
            <Grid container spacing={3} sx={{ padding: 4, marginTop: '8vmin' }}>
                {filteredSubjects.map((subject, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Subject
                            title={subject.title}
                            description={subject.description}
                            imageUrl={subject.imageUrl}
                            semester={subject.semester}
                            handleDarkMode={handleDarkMode}
                            mode = {mode}
                        />
                    </Grid>
                ))}
            </Grid>

            </div>
            <Footer/>
    </>
    )
}
