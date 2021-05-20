import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import '../styles/CarouselDemo.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminCarousel = () => {
    const history = useHistory();
    const [pendingRequest, setPendingRequest] = useState([]);
    
    useEffect(async () => {
        await Axios.post('/admin/pendingRequest')
            .then(res => {   
                console.log('LIVE:', res.data.message);
                setPendingRequest(res.data.message)
            })
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    history.push('/author/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            });
        
    }, []);
    
    const review = id => {
        //history.push(`/course/feedback/${title}`);
        history.push(`/admin/review/${id}`)
    }

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = pendingRequest => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        {/* <div className="CCimg">
                            <img
                                src={Live.courseThumbnail}
                                onError={e => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                                alt="error"
                                className="product-image"
                            />
                        </div> */}
                    </div>
                    <div>
                        <div className="CCtitle">
                            <h4 className="p-mb-1">{pendingRequest}</h4>
                        </div>
                        
                        <div className="car-buttons p-mt-5">
                            {/* <Button
                                icon="pi pi-play"
                                onClick={() => submit(Live.courseName)}
                                className="p-button p-button-rounded p-mr-2"
                            /> */}
                            
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" onClick = {() => review(pendingRequest)}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div>
            <div className="CourseCorousel">
                <div className="carousel-demo">
                    <div className="card">
                        <Carousel
                            value={pendingRequest}
                            numVisible={5}
                            numScroll={5}
                            responsiveOptions={responsiveOptions}
                            itemTemplate={productTemplate}
                            header={<h5 className="CCHeader">Pending Requests</h5>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCarousel;
