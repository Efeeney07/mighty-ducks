import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"

function CityBookings() {
    var city = localStorage.getItem('_cityChoice')
    console.log(city)
    var flight_number = []
    var airline = []
    var price = []
    var departure = []
    var departureDate = []
    var airlineCode = []
    var destination = []
    var expireDate = []
    var expire = []
    var website

    window.onload = function CityAPI() {
       
        const options = {
            method: 'GET',
            headers: {
                'X-Access-Token': '4eaf2071e912db689ea22d419dd5ecca',
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
        };

        fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=USD&origin=' + city, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                let dataAPI = Object.values(response.data)
                
                for (let i = 0; i < 15; i++) {
                    price[i] = dataAPI[i].price
                    departure[i] = dataAPI[i].departure_at
                    departureDate[i] = departure[i].substr(0, 10)
                    airline[i] = dataAPI[i].airline
                    flight_number[i] = dataAPI[i].flight_number
                    airlineCode[i] = airline[i].concat(flight_number[i])
                    destination[i] = dataAPI[i].destination
                    expireDate[i] = dataAPI[i].expires_at
                    expire[i] = expireDate[i].substr(0, 10)
                }
                console.log(destination)
                AirportAPI()
            }
            )
            .catch(err => console.error(err));
    }
    function AirportAPI() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb789da470mshe7d9b0765c7b2a8p1a31d5jsn78609a2f5cc0',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };

        fetch('https://airport-info.p.rapidapi.com/airport?iata=' + city, options)
            .then(response => response.json())
            .then(response => {
                website = response.website
                renderAPI()
                console.log(response)
            })
            .catch(err => console.error(err));
    }


    async function createFavorite(destination,price,airlineCode,departureDate,id) {
        if (localStorage.getItem('loginState')) {
            const favorite = {
                favoritedBy: localStorage.getItem('user'),
                departingFrom: city,
                arrivingAt: destination,
                airline: airlineCode,
                price: price,
                departure:departureDate
            }
            console.log(favorite.favoritedBy, favorite.departingFrom, favorite.arrivingAt,favorite.airline, favorite.price,favorite.departure)

                await fetch("https://travelwizard-mga2t.ondigitalocean.app/mighty-ducks-server/Favorite/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(favorite),
            }).catch((error) => {
                window.alert(error);
                return;
            });
            document.getElementById(id).innerHTML="Unfavorite"
            
            
        
        } else {
            console.log("user not logged in")
        }
    }

    return (
        <>
                <h2>Prices Found by City</h2>
                <a id="topWebsite">Link to Airport</a>
    <Row>
            <Col>
                    <Card style={{
                        width: '18rem',
                        left: '10px',

                    }}>
                        <Card.Header>
                            <button id="fav1"
                                onClick={() => {
                                    createFavorite(destination[0],price[0],airlineCode[0],departureDate[0],"fav1")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                           <strong>{city + ' -> '}<span id="destination0"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline0">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire0">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav2"
                                onClick={() => {
                                    createFavorite(destination[1],price[1],airlineCode[1],departureDate[1],"fav2")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination1"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline1">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire1">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav3"
                                onClick={() => {
                                    createFavorite(destination[2],price[2],airlineCode[2],departureDate[2],"fav3")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination2"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline2">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire2">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button className="searchButton" id="fav4"
                                onClick={() => {
                                    createFavorite(destination[3],price[3],airlineCode[3],departureDate[3],"fav4")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination3"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline3">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire3">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav5"
                                onClick={() => {
                                    createFavorite(destination[4],price[4],airlineCode[4],departureDate[4],"fav5")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination4"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline4">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire4">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
            <br /><br />
            <Row>
            <Col>
                    <Card style={{
                        width: '18rem',
                        left: '10px',

                    }}>
                        <Card.Header>
                            <button id="fav6"
                                onClick={() => {
                                    createFavorite(destination[5],price[5],airlineCode[5],departureDate[5],"fav6")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                           <strong>{city + ' -> '}<span id="destination5"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline5">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire5">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav7"
                                onClick={() => {
                                    createFavorite(destination[6],price[6],airlineCode[6],departureDate[6],"fav7")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination6"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline6">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire6">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav8"
                                onClick={() => {
                                    createFavorite(destination[7],price[7],airlineCode[7],departureDate[7],"fav8")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination7"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline7">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire7">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav9"
                                onClick={() => {
                                    createFavorite(destination[8],price[8],airlineCode[8],departureDate[8],"fav9")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination8"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline8">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire8">Loading...</ListGroup.Item>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem',

                    }}>
                        <Card.Header>
                            <button id="fav10"
                                onClick={() => {
                                    createFavorite(destination[9],price[9],airlineCode[9],departureDate[9],"fav10")
                                }}
                            >
                                Favorite
                            </button>
                        </Card.Header>
                        <Card.Title>
                            <strong>{city + ' -> '} <span id="destination9"/></strong>
                        </Card.Title>
                        <ListGroup.Item id="departuredate9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="price9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="airline9">Loading...</ListGroup.Item>
                        <ListGroup.Item id="expire9">Loading...</ListGroup.Item>
                    </Card>
                </Col>
            </Row>
            </>
    )
    async function renderAPI() {
        document.getElementById("destination0").innerHTML = destination[0]
        document.getElementById("departuredate0").innerHTML = "Departure: " + departureDate[0]
        document.getElementById("price0").innerHTML = "Price: $" + price[0]
        document.getElementById("airline0").innerHTML = "Airline Code: " + airlineCode[0]
        document.getElementById("expire0").innerHTML = "Price Changes: " + expire[0]
        document.getElementById("destination1").innerHTML = destination[1]
        document.getElementById("departuredate1").innerHTML = "Departure: " + departureDate[1]
        document.getElementById("price1").innerHTML = "Price: $" + price[1]
        document.getElementById("airline1").innerHTML = "Airline Code: " + airlineCode[1]
        document.getElementById("expire1").innerHTML = "Price Changes: " + expire[1]
        document.getElementById("destination2").innerHTML = destination[2]
        document.getElementById("departuredate2").innerHTML = "Departure: " + departureDate[2]
        document.getElementById("price2").innerHTML = "Price: $" + price[2]
        document.getElementById("airline2").innerHTML = "Airline Code: " + airlineCode[2]
        document.getElementById("expire2").innerHTML = "Price Changes: " + expire[2]
        document.getElementById("destination3").innerHTML = destination[3]
        document.getElementById("departuredate3").innerHTML = "Departure: " + departureDate[3]
        document.getElementById("price3").innerHTML = "Price: $" + price[3]
        document.getElementById("airline3").innerHTML = "Airline Code: " + airlineCode[3]
        document.getElementById("expire3").innerHTML = "Price Changes: " + expire[3]
        document.getElementById("destination4").innerHTML = destination[4]
        document.getElementById("departuredate4").innerHTML = "Departure: " + departureDate[4]
        document.getElementById("price4").innerHTML = "Price: $" + price[4]
        document.getElementById("airline4").innerHTML = "Airline Code: " + airlineCode[4]
        document.getElementById("expire4").innerHTML = "Price Changes: " + expire[4]
        document.getElementById("destination5").innerHTML = destination[5]
        document.getElementById("departuredate5").innerHTML = "Departure: " + departureDate[5]
        document.getElementById("price5").innerHTML = "Price: $" + price[5]
        document.getElementById("airline5").innerHTML = "Airline Code: " + airlineCode[5]
        document.getElementById("expire5").innerHTML = "Price Changes: " + expire[5]
        document.getElementById("destination6").innerHTML = destination[6]
        document.getElementById("departuredate6").innerHTML = "Departure: " + departureDate[6]
        document.getElementById("price6").innerHTML = "Price: $" + price[6]
        document.getElementById("airline6").innerHTML = "Airline Code: " + airlineCode[6]
        document.getElementById("expire6").innerHTML = "Price Changes: " + expire[6]
        document.getElementById("destination7").innerHTML = destination[7]
        document.getElementById("departuredate7").innerHTML = "Departure: " + departureDate[7]
        document.getElementById("price7").innerHTML = "Price: $" + price[7]
        document.getElementById("airline7").innerHTML = "Airline Code: " + airlineCode[7]
        document.getElementById("expire7").innerHTML = "Price Changes: " + expire[7]
        document.getElementById("destination8").innerHTML = destination[8]
        document.getElementById("departuredate8").innerHTML = "Departure: " + departureDate[8]
        document.getElementById("price8").innerHTML = "Price: $" + price[8]
        document.getElementById("airline8").innerHTML = "Airline Code: " + airlineCode[8]
        document.getElementById("expire8").innerHTML = "Price Changes: " + expire[8]
        document.getElementById("destination9").innerHTML = destination[9]
        document.getElementById("departuredate9").innerHTML = "Departure: " + departureDate[9]
        document.getElementById("price9").innerHTML = "Price: $" + price[9]
        document.getElementById("airline9").innerHTML = "Airline Code: " + airlineCode[9]
        document.getElementById("expire9").innerHTML = "Price Changes: " + expire[9]
        document.getElementById("topWebsite").setAttribute("href", website)
    }
}




export default CityBookings