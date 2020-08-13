import React from 'react'

import imgDesignThinking from '@/assets/images/img_designthinking.png';
import imgUserResearch from '@/assets/images/img_userresearch.png';
import imgVisualDesign from '@/assets/images/img_visualdesign.png';

import SkillCard from './SkillCard'

export default function Skills() {
    const cardList = [
        {
            cardImage: imgDesignThinking,
            cardTitle: "Design Thinking",
            cardText: "I use the agile people-centered methodology being intrigued by the psychology behind not only people’s problems and behaviours, but also wishes and motivations"
        },
        {
            cardImage: imgUserResearch,
            cardTitle: "User Research",
            cardText: "I use the agile people-centered methodology by being intrigued by the psychology behind not only people's problems and behaviours,"
        },
        {
            cardImage: imgVisualDesign,
            cardTitle: "Visual Design",
            cardText: "I use the agile people-centered methodology by being intrigued by the psychology behind not only people's problems and behaviours,"
        }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Skills</h1>
                </div>
                <div className="col-12 text-justify">
                    <h5>
                        Below are the three main areas that my key strengths lie in, as well as software skills. For a full breakdown, please refer to my LinkedIn or get in touch to view my CV.
                    </h5>
                </div>
                {
                    cardList.map((cardData, index) => {
                        return <SkillCard
                            key={index}
                            cardImage={cardData.cardImage}
                            cardTitle={cardData.cardTitle}
                            cardText={cardData.cardText}
                        />
                    })
                }
            </div>
        </div>
    )
}
