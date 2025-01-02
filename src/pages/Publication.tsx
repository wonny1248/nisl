import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";


const Publication: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const url: string = 'publication-background.jpg';
    const title: string = 'Publication';
    const contentTitle: string = 'International Journal index in SCIE';
    const papers = [
        {
            "name": "Blockchain-Assisted Secure and Lightweight Authentication Scheme for Multi-Server Internet of Drones Environments",
            "journal": "Mathematics",
            "year": "2024"
        },
        {
            "name": "Provably Quantum Secure Three-Party Mutual Authentication and Key Exchange Protocol Based on Modular Learning with Error",
            "journal": "Electronics",
            "year": "2024"
        },
        {
            "name": "Design of Secure and Privacy-Preserving Data Sharing Scheme Based on Key Aggregation and Private Set Intersection in Medical Information System",
            "journal": "Mathematics",
            "year": "2024"
        },
        {
            "name": "Provably Secure Lightweight Mutual Authentication and Key Agreement Scheme for Cloud-Based IoT Environments",
            "journal": "Sensors",
            "year": "2023"
        },
        {
            "name": "A Secure Content Trading for Cross-Platform in the Metaverse With Blockchain and Searchable Encryption",
            "journal": "IEEE Access",
            "year": "2023"
        },
        {
            "name": "Secure and Privacy-Preserving Authentication Scheme Using Decentralized Identifier in Metaverse Environment",
            "journal": "Electronics",
            "year": "2023"
        },
        {
            "name": "Provably Secure Mutual Authentication and Key Agreement Scheme Using PUF in Internet of Drones Deployments",
            "journal": "Sensors",
            "year": "2023"
        },
        {
            "name": "Provably Secure PUF-Based Lightweight Mutual Authentication Scheme for Wireless Body Area Networks",
            "journal": "Electronics",
            "year": "2022"
        },
        {
            "name": "Design of Secure Mutual Authentication Scheme for Metaverse Environments Using Blockchain",
            "journal": "IEEE Access",
            "year": "2022"
        },
        {
            "name": "A Secure Three-Factor Authentication Protocol for E-Governance System Based on Multiserver Environments",
            "journal": "IEEE Access",
            "year": "2022"
        },
        {
            "name": "Design of Blockchain-Based Lightweight V2I Handover Authentication Protocol for VANET",
            "journal": "IEEE TNSE",
            "year": "2022"
        },
        {
            "name": "Design of Secure Handover Authentication Scheme for Urban Air Mobility Environments",
            "journal": "IEEE Access",
            "year": "2022"
        },
        {
            "name": "Secure ECC-Based Three-Factor Mutual Authentication Protocol for Telecare Medical Information System",
            "journal": "IEEE Access",
            "year": "2022"
        },
        {
            "name": "Provably Secure Three-Factor-Based Mutual Authentication Scheme with PUF for Wireless Medical Sensor Networks",
            "journal": "Sensors",
            "year": "2021"
        },
        {
            "name": "A Secure, Lightweight, and Anonymous User Authentication Protocol for IoT Environments",
            "journal": "Sustainability",
            "year": "2021"
        },
        {
            "name": "A Provably Secure and Lightweight Identity-based Two-party Authenticated Key Agreement Protocol for IIoT Environments",
            "journal": "IEEE Systems Journal",
            "year": "2021"
        },
        {
            "name": "Design of Secure Decentralized Car-sharing System Using Blockchain",
            "journal": "IEEE Access",
            "year": "2021"
        },
        {
            "name": "PEVRM Probabilistic Evolution Based Version Recommendation Model for Mobile Application",
            "journal": "IEEE Access",
            "year": "2021"
        },
        {
            "name": "Design of Secure Protocol for Cloud-Assisted Electronic Health Record System Using Blockchain",
            "journal": "Sensors",
            "year": "2020"
        },
        {
            "name": "A Secure and Efficient Three-Factor Authentication Protocol in Global Mobility Networks",
            "journal": "Applied Science",
            "year": "2020"
        },
        {
            "name": "Privacy-Preserving Lightweight Authentication Protocol for Demand Response Management in Smart Grid Environment",
            "journal": "Applied Science",
            "year": "2020"
        },
        {
            "name": "A lightweight three-factor authentication protocol for digital rights management system",
            "journal": "Peer-to-Peer Networking and Applications",
            "year": "2020"
        },
        {
            "name": "A Dynamic Privacy-Preserving Key Management Protocol for V2G in Social Internet of Things",
            "journal": "IEEE Access",
            "year": "2019"
        },
        {
            "name": "Secure Three-Factor Authentication Protocol for Multi-Gateway IoT Environments",
            "journal": "Sensors",
            "year": "2019"
        },
        {
            "name": "Secure user authentication scheme with novel server mutual verification for multiserver environments",
            "journal": "IJCS",
            "year": "2019"
        },
        {
            "name": "2PAKEP Provably Secure and Efficient Two-Party Authenticated Key Exchange Protocol for Mobile Environment",
            "journal": "IEEE Access",
            "year": "2018"
        },
        {
            "name": "Provably Secure and Efficient Authentication Protocol for Roaming Service in Global Mobility Networks",
            "journal": "IEEE Access",
            "year": "2017"
        },
        {
            "name": "Security analysis and enhancements of an improved multi-factor biometric authentication scheme",
            "journal": "IJDSN",
            "year": "2017"
        },
        {
            "name": "A Selective Group Authentication Scheme for IoT-Based Medical Information System",
            "journal": "Journal of Medical Systems",
            "year": "2017"
        },
        {
            "name": "Three-Factor User Authentication and Key Agreement Using Elliptic Curve Cryptosystem in Wireless Sensor Networks",
            "journal": "Solid-State Electronics",
            "year": "2016"
        },
        {
            "name": "Secure biometric-based authentication scheme with smart card revocationreissue for wireless sensor networks",
            "journal": "IJDSN",
            "year": "2016"
        },
        {
            "name": "Temperature-dependent characteristics of AlGaN_GaN FinFETs with sidewall MOS channel",
            "journal": "Solid-State Electronics",
            "year": "2016"
        },
        {
            "name": "Lateral GaN nanowire prepared by using two-step TMAH wet etching and HfO2 sidewall spacer",
            "journal": "Journal of Crystal Growth",
            "year": "2016"
        },
        {
            "name": "Surface Plasmon Polaritons of a Symmetric Metamaterial Slab Waveguide with a Hollow Core for Fluid Sensing",
            "journal": "Journal of Korean Physics Society",
            "year": "2015"
        },
        {
            "name": "Privacy-preserving ID-based key agreement protocols for cluster-based MANETs",
            "journal": "IJAHUC",
            "year": "2013"
        },
        {
            "name": "Anonymous Cluster-Based MANETs with Threshold Signature",
            "journal": "IJDSN",
            "year": "2013"
        }
    ]


    useEffect(() => {
        setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

    }, [])

    return (
        <>
            <TopBackground url={url}/>
            <PageTitle title={title} isTitleVisible={isTitleVisible}/>
            <ScrollingInduction/>

            <div className='flex flex-col items-center justify-center mb-20 mt-0'>
                <div className='text-4xl font-bold text-black mb-10'>
                    {contentTitle}
                </div>

                <ol className='list-decimal'>
                    {
                        papers.map((paper) => {
                            return (
                                <li className='text-base'>
                                    {paper.name}, {paper.journal}, {paper.year}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default Publication