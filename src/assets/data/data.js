export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Firmansyah',
            child: 'Putra ke 4',
            father: 'Ilham Rahman',
            mother: 'Siti Hajar',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Husaini',
            child: 'Putri ke 2',
            father: 'Husen',
            mother: 'Hasanah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'April',
            date: '26',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'April',
            date: '26',
            day: 'Minggu',
            hours: {
                start: '19.30',
                finish: 'Selesai'
            }
        },
        address: 'Bd.Yehbiu, RT 000/ RW 000, Desa.Patas, Kec.Gerokgak, Kab.Buleleng, Bali (81155)'
    },

    link: {
        calendar: 'https://calendar.app.google/PgHSD4XFdroajBSo9',
        map: 'https://maps.app.goo.gl/U7kKZhwhz3eMSibn6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        // {
        //     id: 2,
        //     image: './src/assets/images/2.png'
        // },
        // {
        //     id: 3,
        //     image: './src/assets/images/3.png'
        // },
        // {
        //     id: 4,
        //     image: './src/assets/images/4.png'
        // },
        // {
        //     id: 5,
        //     image: './src/assets/images/5.png'
        // }
    ],

    bank: [
        {
            id: 1,
            name: 'Firmansyah',
            icon: './src/assets/images/bca.png',
            rekening: '8271077173'
        },
        // {
        //     id: 2,
        //     name: 'Ipsum Lorem',
        //     icon: './src/assets/images/bri.png',
        //     rekening: '12345678'
        // },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        // {
        //     id: 5,
        //     teks: 'Ucapan',
        //     icon: 'bx bxs-message-rounded-dots',
        //     path: '#wishas',
        // },
    ],
}
