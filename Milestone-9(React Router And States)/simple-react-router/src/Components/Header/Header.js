import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activestyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <NavLink
                to="/home"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                    };
                }}
            >Home</NavLink>
            <NavLink
                to="/friends"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                    };
                }}
            >
                Friends
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                    };
                }}
            >About</NavLink>
            <NavLink
                to="/about/culture"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                    };
                }}
            >Culture</NavLink>
        </div>
    );
};

export default Header;