import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function Homescreen() {


    return (
        <div className="HomeScreen">
            <Nav />

            <Banner />

            <Row title="NetFlix Orignals " fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending " fetchUrl = {requests.fetchTrending}  />
            <Row title="Top Rated " fetchUrl = {requests.fetchTopRated}  />
            <Row title="Action " fetchUrl = {requests.fetchActionMovies}  />
            <Row title="Comedy " fetchUrl = {requests.fetchComedyMovies}  />
            <Row title="Horror" fetchUrl = {requests.fetchHorrorMovies}  />
            <Row title="Romance    " fetchUrl = {requests.fetchRomanceMovies}  />
            <Row title="Documentaries " fetchUrl = {requests.fetchDocumentaries}  />
        </div>
    )
};

export default Homescreen;
