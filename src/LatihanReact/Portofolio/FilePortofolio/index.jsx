import React from "react";
import "./css/style.css";
import styled from "styled-components";
import gambar from "./img/b4.jpg";
import gambar1 from "./img/bg2.png";
import {  Outlet,Link } from "react-router-dom";

const Bg = styled.div`
    background-image: url(${gambar1});
    font-family:algerian;
    margin:0;
`;

const Gambar = styled.div`
    background-image: url(${gambar});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height:500px;
    
`;

class FilePortofolio extends React.Component{
    render(){
        return(
            <div>
                <>
                <Bg>
                <nav className="navbar navbar-expand-sm bg-danger navbar-dark ">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active bg-primary mb-1" href="#rizal">Rizal Abdullah</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#bio" >Biografi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            <Gambar className="gambar">   
                <div className="container-fluid p-5 text-center">
                    <h1 className=" pt-5 text-danger">MY PORTOFOLIO</h1>
                    <h2 className="text-white" id="rizal">Rizal Abdullah</h2>
                    <button className="btn1 btn-danger text-warning pl-4 pr-4 mt-5 border-3 border-light"><Link to="/"> Kembali ke komponen </Link></button>
                </div>	
            </Gambar>

                <div className="header">
                <div className="container-fluid p-3 text-center bg-danger mt-3  rounded-pill" >
                    <h3 className="" id="bio">Biografi</h3>
                        <p className="">Halo perkenalkan nama saya Rizal Abdullah asal bogor, saya sangat tertarik sekali dengan dunia pemrograman</p>


                <div className="flex-header" >
                    <div className="card text-dark bg-light mb-3" >
                         <div className="card-header bg-warning">Skills</div>
                            <div className="card-body">
                                <div className="card-text" >
                                    <ul >
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>javascript</li>
                                    <li>jQuery</li>
                                    <li>bootstrap</li>

                                    </ul>
                                </div>
                        </div>
                    </div>

                        <div className="card text-dark bg-light mb-3" >
                            <div className="card-header bg-warning">Other Skills</div>
                            <div className="card-body">
                                <div className="card-text" >
                                    
                                    <ol >
                                    <li>MySQL</li>
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container-fluid p-3  mt-3 text-white" >
                    <div className="flex-contact" >
                        <div className="contact p-2 border border-3 rounded border-light">
                        <h3 className="text-center" id="contact">CONTACT ME</h3>

                        <form className="row " action="" method="get">
                            <div className="col-md-12">
                                <label>EMAIL</label>
                                <input type="text" className="form-control " name="" placeholder="your email" /><br />
                                <label>Message</label>
                                <textarea  className="form-control textarea" name="" placeholder="write something" ></textarea>
                                <button className="btn btn-success mt-2 border rounded border-primary text-light " type="submit" value="Send" >Send</button>
                        
                            </div>
                        </form>    
                    </div>
                    </div>
                </div>

                <div className="container-fluid bg-warning text-center p-2 pb-2">Copyright &copy;2020 - All right reserves
                </div>

             </Bg>
                <Outlet />
             </>
        </div>
        )
    }
}

export default FilePortofolio;