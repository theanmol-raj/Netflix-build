import React,{useState ,useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] =  useState(false);

    const transitionnavBar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
useEffect(() => { 
    window.addEventListener("scroll",transitionnavBar);
    return () => window.removeEventListener("scroll",transitionnavBar);
}, [])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">

                 <img
                     className="nav_logo"
                     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Test" />
                <img 
                    className="nav_avatar"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBhAOEQ4RDxAPDw8QEBASEhIQEw8NFhIWFhYRFxMaKCggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OFxAQGCsZFx8rLS0tKy03Kys3Li0rKy0rNy0rKzctLSstLS0tKzcrNystLSsrKy0rKysrKystKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADEQAQABAgMGBQMEAgMAAAAAAAABAgMEBRESITFBUaEVUmFxgSKRsRPB0eFCcjI0Yv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAaEQEBAQADAQAAAAAAAAAAAAAAARECEjEh/9oADAMBAAIRAxEAPwD9HAdWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9ppmurSI1npD7atzdrimI1mV/g8LThqOtXOUtwQLGVVVRrXVs+kb5+6VTldqI5z8pwxtXECvKrc8NY+dUPEZXXbjWmduOnCf7XYbTGWmNJfF7j8FGIp1jdXHCevpKjqjZnSY0mOMdJbl1HwBQAAAAAAAAAAAAAAAAAAABb5NY0om5PGd0eyzccJRsYWiP/MffR2c60AIAACnzixsXIrj/AC3T7rhEzSnawVXppPdZ6VQAOjIAAAAAAAAAAAAAAAAAAADTYedqxRPWmn8OiFlN79TCxHOjd8ck1yrQAAAAi5lOmCr9ojvCUrM6vaW4o5zOs+yz0VADoyAAAAAAAAAAAAAAAAAADpZsVX6tKY1/EfKytZRGn1V/FMfvKWyCDgsROGva8p3VR6NBbri5RExOsTwVt/KY2PoqnXpVz+USxiLmBuaTG7nTP7Jfvir8RMPmFu9HHZnpO7ulRVE82FfR5qrinjMQiYjMrdqN31z0jh9zBIv3qbFuapndHeejPYi9N+7NU8+0dHaqq5j7vDX05Up1vKadj6qpmfTSIhuZEU4tL2UaRrTXr6Vfyrbluq1XpVGkwsqPICgAAAAAAAAAAAAAA6WLU37sUxxntHVzW+TWdKJrnnuj2S3BOw9imxbimPmes9XUHNoc71im9TpVGroAqr2Ub/oq+Kv5Rpy+9Rwj7VQvhe1TFFGXXq+Mae9SVYymI311a+kbo+6zDtTHi3bptU6UxpD2CKI+MwsYm1pzjhPSUgBl66ZoqmJ3TE6T7vKxzmzs3Yrj/LdPvH9fhXOkusgCgAAAAAAAAAAAA0mEt/p4amOkR92dt07VyI6zEd2oZ5LABhQAAAAAAAAAETNKNvB1emkqBpr9O1ZqjrTP4ZlvilAGkAAAAAAAAAAAAdcJ/wBqj/en8w0rNYWdnE0T0rp/MNKxyWADKgAAAAAAAAAPlW+mfZl6v+U+7T1zpRM9IlmKuLXFK+ANoAAAAAAAAAAAANDgcRGIsRPON1XuzzpYvVWK9qmdJ7T6SlmkaYVtnNqZj6qZpnrG+HfxG15u0sZWksRPEbXm7SeI2vN2kwSxE8RtebtJ4ja83aTBLETxG15u0niNrzdpMEsRPEbXm7SeI2vN2kwSxEnMrXm7SjX82jTSin5n+DKO2aYj9KxsxP1VbvaOqjerlc3K5qmdZnm8tyYyAKAAAAAAAAAAAAAAAAAAgAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" alt="avatar"/>
        
            </div>
        </div>
    )
};

export default Nav;
