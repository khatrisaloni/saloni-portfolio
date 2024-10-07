import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'eMMC and UFS Platform Validation',
        description:"In my role, I analyzed eMMC and UFS features to ensure compliance and optimize performance. I developed and automated test plans, boosting efficiency and coverage, while conducting failure analysis to improve product reliability. I collaborated with clients and joint labs for product qualification, managed bug tracking in Jira, and ensured timely defect resolution to maintain high-quality standards.",
        tools: ['Visual Studio', 'Pycharm', 'Git', 'Jira', 'Confluence', 'Bitbucket', 'SVN', 'Sourcetree', 'Tableau', 'PowerBI'],
        programmingLanguages: ['C++', 'C', 'Embedded C', 'Python'],
        role: 'Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Pharmacy Management System',
        description: 'I worked on a Database Management System (DBMS) project designed to manage the database of a pharmaceutical system. This project involved handling critical data related to medicines, inventory, suppliers, and customer transactions. Using MySQL, I developed and optimized queries for efficient data storage and retrieval, ensuring the database structure was robust and capable of managing large volumes of information while maintaining data integrity.',
        tools: ['MySQL Workbench', 'SQL Server'],
        programmingLanguages: ['MySQL', 'PostgreSQL'],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'LAN and WAN Network Configuration',
        description: 'I worked on configuring both LAN and WAN using Cisco Packet Tracer, a simulation tool for network design and troubleshooting. This involved applying key networking concepts, such as IP addressing, subnetting, routing protocols, and network topology design. I developed and tested various configurations, ensuring the proper setup of routers, switches, and other network devices to establish secure and efficient communication between different network segments. ',
        tools: ['Cisco Packet Tracer', 'Putty'],
        programmingLanguages: ['Cisco IOS Command Line (CLI)'],
        code: '',
        role: 'Personal Project',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Fashionstic',
        description: "I developed an online shopping website that allows users to search for the latest fashion trends and place orders through multiple payment gateways. The website's front-end was built using HTML, CSS, and JavaScript to create a responsive and user-friendly interface. I implemented features such as product search, shopping cart functionality, and secure payment options, ensuring a seamless shopping experience.",
        tools: ['VS Code', 'Git'],
        programmingLanguages: ['HTML', 'CSS', 'Javascript'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Personal Project',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },