import React, { Component } from 'react';


// import Nav from "../../components/nav/Nav";
import './service.scss';
// import Catalogue from '../catalogue/Catalogue'

class Service extends Component {

    constructor(props) {
        super(props)
        this.state = {

            popularItems: [],
            popularPics: [],
            cleaningItems: [],
            cleaningPics: [],
            tvItems: [],
            tvPics: [],
            assemblyItems: [],
            assemblyPics: [],
            handymanItems: [],
            handymanPics: [],
            plumbingItems: [],
            plumbingPics: [],
            electricalItems: [],
            electricalPics: [],
            paintingItems: [],
            paintingPics: [],
            movingItems: [],
            movingPics: [],
            homeItems: [],
            homePics: [],
            windowItems: [],
            windowPics: [],

            serviceItems : {
                
                'popular' : {
                    'Interior Painting': 'https://farm66.staticflickr.com/65535/49584899833_5bd6926830.jpg',
                    'Moving Help': 'https://farm66.staticflickr.com/65535/49585627667_1ba201a0ab.jpg',
                    'Home Cleaning': 'https://farm66.staticflickr.com/65535/49584866713_c4afb0fcfc.jpg',
                    'Furniture Assembly': 'https://farm66.staticflickr.com/65535/49585395251_3970ac889e.jpg',
                    'Handyman Service': 'https://farm66.staticflickr.com/65535/49585393976_b86fedb3be.jpg',
                    'Hanging Pictures & Shelves': 'https://farm66.staticflickr.com/65535/49585398561_c1eb70361d.jpg',
                    'Office Cleaning': 'https://farm66.staticflickr.com/65535/49585366241_86574281d6.jpg',
                    'TV Mounting': 'https://farm66.staticflickr.com/65535/49584885958_98daa33b5d.jpg',
                },                

                'cleaning' : {
                    'Affordable Cleaning Service' : 'https://farm66.staticflickr.com/65535/49572074377_72c96bc0c5.jpg',
                    'Affordable Maids' : 'https://farm66.staticflickr.com/65535/49571341823_5ab1e8ef76.jpg',
                    'Apartment Cleaning' : 'https://farm66.staticflickr.com/65535/49572073587_9c13a930e2.jpg',
                    'Bedroom Cleaning' : 'https://farm66.staticflickr.com/65535/49572077882_a097e85b66.jpg',
                    'Cleaning Service' : 'https://farm66.staticflickr.com/65535/49571851561_0a703eb5de.jpg',
                    'Housekeeping' : 'https://farm66.staticflickr.com/65535/49571850106_ef944d0109.jpg',
                    'Maid Service' : 'https://farm66.staticflickr.com/65535/49572075442_b28da57d9b.jpg',
                    'Move In Cleaning' : 'https://farm66.staticflickr.com/65535/49571337283_c8d2c095f1.jpg',
                    'Move Out Cleaning' : 'https://farm66.staticflickr.com/65535/49572073587_9c13a930e2.jpg',
                    'Room Cleaning' : 'https://farm66.staticflickr.com/65535/49571847061_b183f46c04.jpg',
                    'Home Cleaning' : 'https://farm66.staticflickr.com/65535/49571339728_3bb803a2a1.jpg',
                    'Office Cleaning' : 'https://farm66.staticflickr.com/65535/49571342628_59c6159547.jpg',
                    'Vacation Rental Cleaning' : 'https://farm66.staticflickr.com/65535/49571337283_c8d2c095f1.jpg',
                    'Deep Cleaning Service' : 'https://farm66.staticflickr.com/65535/49572076962_e1510fcc14.jpg',
                    'Kitchen Cleaning' : 'https://farm66.staticflickr.com/65535/49571340528_43695cf3f3.jpg',
                    'Living Room Cleaning' : 'https://farm66.staticflickr.com/65535/49572077777_3c159f8367.jpg',
                    'Local Cleaning Service' : 'https://farm66.staticflickr.com/65535/49571338648_972d5c4a32.jpg',
                    'Same Day Cleaning' : 'https://farm66.staticflickr.com/65535/49571847351_b704fa5217.jpg',
                },

                'tv' : {
                    'Hiding TV Wires' : 'https://farm2.staticflickr.com/1842/30757312678_ac1b4185b7.jpg',
                    'Soundbar Installation' : 'https://farm8.staticflickr.com/7092/7370567418_af1623ccc9.jpg',
                    'TV Installation' : 'https://farm5.staticflickr.com/4475/37472488812_19be058b1f.jpg',
                    'TV Wall Mount Installation' : 'https://farm8.staticflickr.com/7267/7540594150_40a9d09c0d.jpg',
                    'TV Mounting' : 'https://farm5.staticflickr.com/4559/38333676984_099d54ac16.jpg',
                    'Home Theater AV Setup' : 'https://farm2.staticflickr.com/1841/29878949217_e382926fc4.jpg',
                },

                'assembly' : {
                    'Furniture Assembly' : 'https://farm2.staticflickr.com/1967/44413449715_45b319d27c.jpg',
                    'Desk Assembly' : 'https://farm66.staticflickr.com/65535/48415583191_d6073e6203.jpg',
                    'Dresser Assembly' : 'https://farm2.staticflickr.com/1933/30386110627_b2da30aa64.jpg',
                    'Exercise Equipment Assembly' : 'https://farm66.staticflickr.com/65535/48415730742_06e4866e50.jpg',
                    'Outdoor Furniture Assembly' : 'https://farm2.staticflickr.com/1961/31451783648_06a2e868e0.jpg',
                    'Bed Assembly' : 'https://farm2.staticflickr.com/1945/30385801807_36b23ce06f.jpg',
                    'Office Furniture Assembly' : 'https://farm66.staticflickr.com/65535/48415580531_43ba4dcb99.jpg',
                },

                'handyman' : {
                    'Air Conditioner Uninstall' : 'https://farm66.staticflickr.com/65535/49175206371_c2650669bc.jpg',
                    'Carpentry & Repairs' : 'https://farm66.staticflickr.com/65535/49522345168_2bdc6a576a.jpg',
                    'Furniture Assembly' : 'https://farm66.staticflickr.com/65535/49114420456_f4aaf2884b.jpg',
                    'Handy Helper' : 'https://farm66.staticflickr.com/65535/49340755947_fcccc77276.jpg',
                    'Home Repair Services' : 'https://farm66.staticflickr.com/65535/49383272753_1ef76a83be.jpg',
                    'Interior Painting' : 'https://farm66.staticflickr.com/65535/49360694218_cb484c45ce.jpg',
                    'Knobs Installation' : 'https://farm66.staticflickr.com/65535/49119749678_5301e5eff9.jpg',
                    'Locks Installation' : 'https://farm66.staticflickr.com/65535/49175206371_c2650669bc.jpg',
                    'TV Mounting' : 'https://farm66.staticflickr.com/65535/49110525517_ab3cfd0055.jpg',
                    'Handyman Service' : 'https://farm2.staticflickr.com/1793/30213913478_07aab5dd5f.jpg',
                    'Hanging Pictures & Shelves' : 'https://farm66.staticflickr.com/65535/49385315336_61012a8905.jpg',
                },

                'plumbing' : {
                    'Plumbing Service' : 'https://farm66.staticflickr.com/65535/49586401368_0a25e65c22.jpg',
                    'Drain Repair' : 'https://farm66.staticflickr.com/65535/49515967548_97e9563c70.jpg',
                    'Faucet Installation' : 'https://farm66.staticflickr.com/65535/49495561047_1044096a60.jpg',
                    'Faucet Repair' : 'https://farm66.staticflickr.com/65535/49500189123_e1bfe06b74.jpg',
                    'Sink Replacement' : 'https://farm66.staticflickr.com/65535/49495561047_1044096a60.jpg',
                    'Toilet Repair' : 'https://farm66.staticflickr.com/65535/49587100697_061e5d59c6.jpg',
                    'Toilet Replacement' : 'https://farm66.staticflickr.com/65535/49583853457_46f122f12c.jpg',
                    'Unclog Toilet' : 'https://farm66.staticflickr.com/65535/49489413052_3126c88306.jpg',
                    'Faucet Replacement' : 'https://farm66.staticflickr.com/65535/49495559482_5c8e0b6151.jpg',
                    'Toilet Trouble' : 'https://farm66.staticflickr.com/65535/49516484846_ab18d82593.jpg',
                },

                'electrical': {
                    'Ceiling & Bath Fans' : 'https://farm66.staticflickr.com/65535/49555735273_194e25cf92.jpg',
                    'Garbage Disposal' : 'https://farm66.staticflickr.com/65535/49537325861_57918de50a.jpg',
                    'Light Switch Installation' : 'https://farm66.staticflickr.com/65535/49587140517_8117095c79.jpg',
                    'Smart Security Cam Installation' : 'https://farm66.staticflickr.com/65535/49537556267_3d872347e1.jpg',
                    'Smart Thermostat Installation' : 'https://farm66.staticflickr.com/65535/49537326596_16384caaff.jpg',
                    'Outlet Installation' : 'https://farm66.staticflickr.com/65535/49582540508_ddcb8da0a1.jpg',
                    'Light Fixtures' : 'https://farm66.staticflickr.com/65535/49559734478_50d69edf5a.jpg',
                    'Electrical Service' : 'https://farm66.staticflickr.com/65535/49537556757_3b6a6ecf99.jpg',
                },

                'painting' : {
                    'Accent Wall Painting' : 'https://farm2.staticflickr.com/1806/42969767612_36ae3ceb09.jpg',
                    'Baseboard Painting' : 'https://farm66.staticflickr.com/65535/48913582971_9be97dcdd5.jpg',
                    'Crown Molding Painting' : 'https://farm66.staticflickr.com/65535/48104649272_46bdcf3174.jpg',
                    'Door Painting' : 'https://farm66.staticflickr.com/65535/48586875817_3de538c1c4.jpg',
                    'Doorframe Painting' : 'https://farm5.staticflickr.com/4871/46645130352_6a493dafb6.jpg',
                    'House Painting' : 'https://farm2.staticflickr.com/1729/41868737015_3de33d60aa.jpg',
                    'Wall Painting' : 'https://farm66.staticflickr.com/65535/49594804257_a107e2c01d.jpg',
                    'Interior Painting' : 'https://farm2.staticflickr.com/1912/44391942904_45a661ae95.jpg',
                    'Bedroom Painting' : 'https://farm66.staticflickr.com/65535/49594753193_e7ddba7d32.jpg',
                },

                'moving': {
                    'Moving Help' : 'https://farm66.staticflickr.com/65535/48046394958_ef24f4c147.jpg',
                    'TV Mounting' : 'https://farm66.staticflickr.com/65535/48675469438_b84f012061.jpg',
                    'Interior Painting' : 'https://farm66.staticflickr.com/65535/48797234756_eb51ee8939.jpg',
                    'Knobs Installation' : 'https://farm66.staticflickr.com/65535/48362299811_4deeaa5599.jpg',
                    'Light Fixtures' : 'https://farm66.staticflickr.com/65535/49238663307_20965e8c0b.jpg',
                    'Move In Cleaning' : 'https://farm66.staticflickr.com/65535/40917183313_c1eccc005d.jpg',
                    'Move Out Cleaning' : 'https://farm66.staticflickr.com/65535/48305584436_0f2bfa8754.jpg',
                    'Storage' : 'https://farm66.staticflickr.com/65535/48621914468_a623b36d20.jpg',
                    'Window Treatments' : 'https://farm66.staticflickr.com/65535/49088479862_c84f9f7805.jpg',
                    'Hanging Pictures & Shelves' : 'https://farm66.staticflickr.com/65535/48908267807_2e836aa6f6.jpg',
                },

                'home' : {
                    'Smart Device Installation' : 'https://farm66.staticflickr.com/65535/49076975351_a04fc88756.jpg',
                    'Smart Lock Installation' : 'https://farm66.staticflickr.com/65535/49346042212_906b117fef.jpg',
                    'Smart Thermostat Installation' : 'https://farm66.staticflickr.com/65535/49362122057_82543acc9a.jpg',
                    'Video Doorbell Installation' : 'https://farm66.staticflickr.com/65535/48868894763_029aea5510.jpg',
                    'Wi-Fi Router Setup' : 'https://farm66.staticflickr.com/65535/48940703937_5518d24e65.jpg',
                    'Smart Home Hub Setup' : 'https://farm66.staticflickr.com/65535/48977983543_a72e41e5f2.jpg',
                    'Smart Security Cam Installation' : 'https://farm66.staticflickr.com/65535/48978684587_d004525a7b.jpg',
                },

                'window' : {
                    'Window Blind Installation' : 'https://farm66.staticflickr.com/65535/49158553247_0de6c20fd2.jpg',
                    'Window Curtain Installation' : 'https://farm66.staticflickr.com/65535/49279996968_78893b0d1f.jpg',
                    'Window Treatments' : 'https://farm66.staticflickr.com/65535/49243109671_c6616373e5.jpg',
                    'Window Drapery Installation' : 'https://farm66.staticflickr.com/65535/49243300292_8bcb507a4e.jpg',
                    'Window Shade Installation' : 'https://farm66.staticflickr.com/65535/49467670491_97b9d12eb1.jpg',
                },
            }
        };

        this.listServiceItem = this.listServiceItem.bind(this);
    }


    showServiceItem(pic, index, items) {
        return (
            <div className="pics">
                <img src={pic} alt="" height="100%" />
                <h6>{items[index]}</h6>
            </div>
        );
    }


    listServiceItem(props) {

        let catalog = Object.keys(props);
        let cataItem = Object.values(props);


        catalog.map((item, index)=>{
            switch(item) {
                case 'popular':{
                    let items = Object.keys(cataItem[0])
                    let pics = Object.values(cataItem[0]);
                    this.setState({
                        popularItems : items,
                        popularPics : pics,
                    })
                    break;
                }
                case 'cleaning':{
                    let items = Object.keys(cataItem[1])
                    let pics = Object.values(cataItem[1]);
                    this.setState({
                        cleaningItems : items,
                        cleaningPics : pics,
                    })
                    break;
                }
                case 'tv':{
                    let items = Object.keys(cataItem[2])
                    let pics = Object.values(cataItem[2]);
                    this.setState({
                        tvItems : items,
                        tvPics : pics,
                    })
                    break;
                }
                case 'assembly':{
                    let items = Object.keys(cataItem[3])
                    let pics = Object.values(cataItem[3]);
                    this.setState({
                        assemblyItems : items,
                        assemblyPics : pics,
                    })
                    break;
                }
                case 'handyman':{
                    let items = Object.keys(cataItem[4])
                    let pics = Object.values(cataItem[4]);
                    this.setState({
                        handymanItems : items,
                        handymanPics : pics,
                    })
                    break;
                }
                case 'plumbing':{
                    let items = Object.keys(cataItem[5])
                    let pics = Object.values(cataItem[5]);
                    this.setState({
                        plumbingItems : items,
                        plumbingPics : pics,
                    })
                    break;
                }
                case 'electrical':{
                    let items = Object.keys(cataItem[6])
                    let pics = Object.values(cataItem[6]);
                    this.setState({
                        electricalItems : items,
                        electricalPics : pics,
                    })
                    break;
                }
                case 'painting':{
                    let items = Object.keys(cataItem[7])
                    let pics = Object.values(cataItem[7]);
                    this.setState({
                        paintingItems : items,
                        paintingPics : pics,
                    })
                    break;
                }
                case 'moving':{
                    let items = Object.keys(cataItem[8])
                    let pics = Object.values(cataItem[8]);
                    this.setState({
                        movingItems : items,
                        movingPics : pics,
                    })
                    break;
                }
                case 'home':{
                    let items = Object.keys(cataItem[9])
                    let pics = Object.values(cataItem[9]);
                    this.setState({
                        homeItems : items,
                        homePics : pics,
                    })
                    break;
                }
                case 'window':{
                    let items = Object.keys(cataItem[10])
                    let pics = Object.values(cataItem[10]);
                    this.setState({
                        windowItems : items,
                        windowPics : pics,
                    })
                    break;
                }
                default:{
                   break;
                }
            }
        })

        // this.setState({
        //     serviceItems: items,
        //     servicePics: pics,
        // })
    }


    componentDidMount() {
        //get data from the store when the first render
        this.listServiceItem(this.state.serviceItems)
    }



    render() {
        return (
            <div className="container">

                <div className="row service__container">

                    <div className="service__content">
                        <a id="popular"></a>
                        <h4>Popular</h4>
                        <div className="service__item">
                            {this.state.popularPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.popularItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="cleaning"></a>
                        <h4>Cleaning</h4>
                        <div className="service__item">
                            {this.state.cleaningPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.cleaningItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="tv_electronics"></a>
                        <h4>TV and Electronics</h4>
                        <div className="service__item">
                            {this.state.tvPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.tvItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="assembly"></a>
                        <h4>Assembly</h4>
                        <div className="service__item">
                            {this.state.assemblyPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.assemblyItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="handyman"></a>
                        <h4>General Handyman</h4>
                        <div className="service__item">
                            {this.state.handymanPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.handymanItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="plumbing"></a>
                        <h4>Plumbing</h4>
                        <div className="service__item">
                            {this.state.plumbingPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.plumbingItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="electrical"></a>
                        <h4>Electrical</h4>
                        <div className="service__item">
                            {this.state.electricalPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.electricalItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="painting"></a>
                        <h4>Painting</h4>
                        <div className="service__item">
                            {this.state.paintingPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.paintingItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="moving"></a>
                        <h4>Moving</h4>
                        <div className="service__item">
                            {this.state.movingPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.movingItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="smart_home"></a>
                        <h4>Smart Home</h4>
                        <div className="service__item">
                            {this.state.homePics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.homeItems)
                                })}
                        </div>
                    </div>

                    <div className="service__content">
                        <a id="window_treatments"></a>
                        <h4>Window Treatments</h4>
                        <div className="service__item">
                            {this.state.windowPics.map(
                                (item, index) => {
                                    return this.showServiceItem(item, index, this.state.windowItems)
                                })}
                        </div>
                    </div>
                </div>
                {/* <div>Service with description and images</div> */}
            </div>
        );
    }
}

export default Service;
