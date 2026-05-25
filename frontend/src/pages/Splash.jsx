// frontend/src/pages/Splash.jsx
import React, { useState, useEffect } from 'react';

export default function Splash() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Panggil backend
        fetch('http://localhost:5000/api/cities')
            .then(res => res.json())
            .then(data => setCities(data));
    }, []);

    return (
        <div>
            {/* Tampilan Splash sesuai screenshot kamu */}
            {/* Dan nanti list kota ini bisa dipakai di Dropdown filter */}
        </div>
    );
}