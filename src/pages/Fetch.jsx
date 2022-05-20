import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Data(props) {
    const [cars, setCars] = useState([])

    const getCars = async () => {
        try {
            let response = await axios.get('https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/vehicles.json')
            setCars(response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect (() => {
        getCars();
    }, [])

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Manufacturer</th>
                                    <th>Type</th>
                                    <th>Class</th>
                                    <th>Plate Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cars.map((car, index) =>{
                                        return (
                                            <tr key={index}>
                                                <td>{car.Name}</td>
                                                <td>{car.Manufacturer}</td>
                                                <td>{car.Type}</td>
                                                <td>{car.Class}</td>
                                                <td>{car.PlateType}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data