"use client";

import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    email: string;
    contribution: string;
    photo: string;
}

const TeamMember: React.FC<{ member: TeamMember }> = ({ member }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div 
            className="relative w-1/4 p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => alert(`Name: ${member.name}\nEmail: ${member.email}\nRole: ${member.role}\nContribution: ${member.contribution}`)}
        >
            <img src={member.photo} alt={member.name} className="w-full h-auto rounded-lg" />
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg">
                    <div>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamMember;
