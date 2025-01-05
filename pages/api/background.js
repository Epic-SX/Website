const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Stansfield College',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor of Computer Science from Stansfield College.",
                year: '2013-2017'
            },
            
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Voyage',
                role: 'Product Manger',
                url: 'no website',
                desc: 'As a product manager at Voyage, a World Tourism Development Platform, I led the development and management of mobile and web products aimed at enhancing the global tourism experience.',
                year: '2022-2024',
                location: 'Los Angeles, USA'
            },
            {
                id: 2,
                title: 'HeySummit',
                role: 'Blockchain Developer',
                url: 'https://heysummit.com/',
                desc: 'As a blockchain developer at HeySummit, I was responsible for designing, developing, and deploying blockchain solutions, focusing on smart contracts, NFTs, and decentralized applications (dApps). ',
                year: '2020-2022',
                location: 'Edinburgh, Scotland'
            },
            {
                id: 3,
                title: 'REVOLVE HEALTHCARE',
                role: 'Fullstack Developer',
                url: 'https://revolve.healthcare/',
                desc: "During my time at REVOLVE HEALTHCARE, I worked as a full-stack developer, contributing to the design, development, and deployment of healthcare software solutions.",
                year: '2018-2020',
                location: 'Warsaw, Poland'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
