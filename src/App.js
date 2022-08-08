import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';

class MainButton extends React.Component {
    render (){
       return (<Button className = {"mainButton btn "+this.props.colorClass} onClick={event =>  window.open(this.props.website, '_blank')}>
    {this.props.buttonName.toUpperCase()}</Button>);
    }
}


function HomeJumbotron (){
    return (<header className="App-header">
    <WebNavbar />
    <div className = "row title">
        <div className = "col-3 justify-content-center">
            <img src={"./assets/serverKMA.png"} className="App-logo" alt="logo" />    
        </div>
      <div className = "col-9">
        <Title />
        <div>
            <MainButton buttonName = "Join Discord" colorClass = "purple-btn" website = "https://s.id/serverKMA"/>
            <MainButton buttonName = "Join Telegram" colorClass = "aqua-btn" website = "https://t.me/nefariaclub"/>
            <MainButton buttonName = "Follow Instagram" colorClass = "instagram-btn" website = "https://instagram.com/kma_server"/>
        </div>
      </div>
    </div>
    </header>
    );
}

class FacilityCard extends React.Component {
    render(){
      return (
              <Card as={Col} className = {'common-card mx-3 my-3 px-3'} style={{ width: '18rem', backgroundColor : this.props.color, color : "white"}}>
                    <Card.Body>
                        
                            <div className = {'my-4'} >
                                <img src={'assets/'+this.props.symbol+'.png'} style={{ width : "20%", height : "20%"}} alt={this.props.symbol}></img>
                                <Card.Title className = {'mt-3'}>{this.props.title.toUpperCase()}</Card.Title>
                            </div>
                        
                  </Card.Body>
                </Card>
      );
    }
}

class MascotCard extends React.Component {
    render(){
      return (
              <Card as={Col} className = {'img-card mx-3 my-3'} style={{ width: '18rem', backgroundColor : this.props.color }}>
                    <Card.Body>
                        <img src={'assets/'+this.props.symbol+'.png'} style= {{height : '30vh'}}alt={this.props.symbol}></img>
                  </Card.Body>
                </Card>
      );
    }
}

MascotCard.defaultProps = {
    color : "maroon"
}

function WebNavbar() {
    return (
        <Navbar style = {{background:"transparent"}} expand="lg">
        <Container  id="main-navbar" className="menu-container">
          <Navbar.Brand id = "brand" href="#home"><b>Kini Makin Asik</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#facility">Fasilitas</Nav.Link>
              <Nav.Link href="#mascot">Maskot</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


  

class Title extends React.Component {
  constructor(){
      super();
      this.state = {
          title: "Kini Makin Asik",
          subTitle: "Server Tercepat, Termuda, dan Terbaik",
          description : `Server "Kini Makin Asik" merupakan server yang bertujuan untuk menyatukan berbagai latar belakang menjadi satu komunitas. Server ini dibuat
          untuk menjadi wadah komunikasi dan sarana ekspresi diri melalui banyak hal.`
      }
  }

  render(){
      return(
          <div>
              <h1 style={{fontSize: "3.5rem"}}> {this.state.title} </h1>
              <p style={{fontSize: "1.5rem", marginTop : "1vh"}}> {this.state.subTitle} </p>
              <p style={{fontSize: "1.2rem", marginTop : "5vh", fontFamily:'Open Sans'}}> {this.state.description} </p>
          </div>
      );
  }
}

class About extends React.Component {
    constructor(){
        super();
        this.state = {
            title : `About Us`,
            caption : `Server "Kini Makin Asik" merupakan server yang digunakan untuk saling curhat dan berbagi pengalaman. Server ini tercipta karena adanya keinginan untuk mengumpulkan 
            pihak dari berbagai kalangan. Anggota server "Kini Makin Asik" terdiri dari siswa SD, SMP, SMA, dan mahasiswa dari berbagai sekolah dan universitas yang ada di Indonesia. `
        }
    }

    render(){
        return(
                <div id="#about" className = "description-container">
                    <div className="text-container">
                    <h1 className = "description-header"> {this.state.title} </h1>
                    <p className = "description-caption"> {this.state.caption} </p>
                    </div>
                </div>
            );
        }
    }

    class Karya extends React.Component {
        constructor(){
            super();
            this.state = {
                title : `Karya`,
                caption : `Server "Kini Makin Asik" merupakan server yang memberikan kesempatan anda untuk berkarya baik itu berupa fotografi maupun berupa desain grafis. `
            }
        }
    
        render(){
            return(
                    <div id="#about" className = "description-container">
                        <div className="text-container">
                        <h1 className = "description-header"> {this.state.title} </h1>
                        <p className = "description-caption"> {this.state.caption} </p>
                        </div>
                    </div>
                );
            }
        }


    class Facility extends React.Component {
        constructor(){
            super();
            this.state = {
                title : `Fasilitas`,
                caption : `Server Kini Makin Asik dilengkapi oleh beberapa fasilitas, antara lain sebagai berikut :  `
            }
        }
    
        render(){
            return(
                    <div id="facility" className = "description-container">
                        <div className = "text-container">
                        <h1 className = "description-header"> {this.state.title} </h1>
                        <p className = "description-caption"> {this.state.caption} </p>
                        <Row className="mx-auto">
                            <FacilityCard title="Sharing Kehidupan Sekolah" color="blue" symbol="School"/>
                            <FacilityCard title="Sharing Pembelajaran" color="maroon"/>
                            <FacilityCard symbol = "Microphone" title="Podcast" color="rgb(255, 108, 3)"/>
                        </Row>
                        <Row className="mx-auto">
                            <FacilityCard title="Bot Humairah" color="#11dc03" symbol="Humairah Head"/>
                            <FacilityCard title="Tempat Share Hobi" color="rgb(249, 57, 89)"/>
                            <FacilityCard symbol = "Camera" title="Tempat Share Karya" color="navy"/>
                        </Row>
                        </div>
                    </div>
                );
            }
        }

        class Mascot extends React.Component {
            constructor (){
                super();
                this.state = {
                    title : "Maskot",
                    caption : [`Kini Makin Asik memiliki maskot bernama "Andal". "Andal" menggambarkan seorang wanita yang pekerja keras, cerdas, dan kalem. Ia juga menggambarkan seorang yang suka membantu
                    dan selalu membuat orang lain bersemangat. "Andal" menjadi tema besar server "Kini Makin Asik" yang bertujuan menciptakan komunitas yang memberikan semangat kepada anggotanya.`, 
                    `Andal juga tersedia dalam bentuk emoji di server "Kini Makin Asik". Emoji tersebut menunjukkan ekspresi bahagia, sedih, marah, penasaran, dan masih banyak lagi.`]
                }
            }

            render(){
                return (
                    <div id="mascot" className = "description-container">
                        <div className="text-container">
                            <h1 className = "description-header"> {this.state.title} </h1>
                            <div>
                                <Carousel interval={1000} 
                                fade={true}
                                controls = {false}
                                indicators={false}>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                            <MascotCard symbol="serverKMA"/>
                                            <MascotCard symbol="serverKMA2"/>
                                            <MascotCard symbol="serverKMA3"/>
                                            <MascotCard symbol="serverKMA4"/>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                            <MascotCard symbol="serverKMA5"/>
                                            <MascotCard symbol="serverKMA6"/>
                                            <MascotCard symbol="serverKMA7"/>
                                            <MascotCard symbol="serverKMA4"/>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <p className = "description-caption"> {this.state.caption[0]} </p>
                            <div>
                                <Carousel interval={1000} 
                                fade={true}
                                controls = {false}
                                indicators={false}>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                            <MascotCard symbol="emojiKMA" color = "maroon"/>
                                            <MascotCard symbol="emojiKMA2" color = "maroon"/>
                                            <MascotCard symbol="emojiKMA3" color = "maroon"/>
                                            
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                            <MascotCard symbol="emojiKMA4" color = "rgb(255, 132, 0)"/>
                                            <MascotCard symbol="emojiKMA5" color = "rgb(255, 132, 0)"/>
                                            <MascotCard symbol="emojiKMA6" color = "rgb(255, 132, 0)"/>
                                            
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                        <MascotCard symbol="emojiKMA7" color = "gray"/>
                                            <MascotCard symbol="emojiKMA8" color = "gray"/>
                                            <MascotCard symbol="emojiKMA9" color = "gray"/>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className="mx-auto">
                                        <MascotCard symbol="emojiKMA10" color = "gray"/>
                                            <MascotCard symbol="emojiKMA11" color = "gray"/>
                                            <MascotCard symbol="emojiKMA12" color = "gray"/>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <p className = "description-caption"> {this.state.caption[1]} </p>
                        </div>
                    </div>
                );
            }
        }

        function Logo(props){
            return (
                    <a href={props.website} className="px-2">
                    <img alt = {props.name} src={'assets/'+props.name+'.png'} style={{height : "10%", width : "10%"}}></img>
                    </a>
            )
        }

        function Footer() {
                    return (
        <div className="pt-5 pb-5 footer">
        <div className="container">
        <Row>
            <Col className="col-lg-6 col-xs-12 about-us">
            <h2>Kini Makin Asik</h2>
            <p className="text-white-50">Server Tercepat, Termuda, dan Terbaik</p>
            <p className="mt-lg-3">Server Kini Makin Asik merupakan server yang dirancang untuk menjadi komunitas pembelajaran, khususnya pembelajaran tingkat SD hingga SMA dan juga pembelajaran IT. Server ini juga menyediakan
                berbagai macam sarana untuk menuangkan ide dan menyalurkan hobi melalui berbagai karya, antara lain fotografi, desain grafis, gambar, dan sebagainya.
            </p>
            </Col>
            <Col className="col-lg-6 col-xs-12 follow-us">
                <h3 className="mt-lg-0 mt-sm-4 text-center mb-3">Ikuti Kami</h3>
                <p>
                <Logo website="https://www.instagram.com/kma_server" name="Instagram"/>
                <Logo website="https://s.id/serverKMA" name="Discord"/>
                </p>
            </Col>
        </Row>
        <div className="row mt-5">
            <div className="col copyright">
            <p className=""><small className="text-white-50">© 2022. All Rights Reserved.</small></p>
            </div>
        </div>
        </div>
        </div>);
}


function App() {
  return (
    <div className="App">
        
      <HomeJumbotron />
        <About />
        <Facility />
        <Mascot />
        <Karya />
        <Footer />
      </div>
  );
}
  


export default App;