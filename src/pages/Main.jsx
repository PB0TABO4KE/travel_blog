import { Row, Col, Form } from 'react-bootstrap';
import { useContext } from "react";
import AppCtx from "../context";


import PostPopular from '../components/PostPopular';
import PostNew from '../components/PostNew';
import PostNew2 from '../components/PostNew2';


function Main () {


    const {
        posts
    } = useContext(AppCtx);



    return <>
    
    <h1>Главная страница</h1>

    <Row>
          <Form className='d-flex justify-content-center'>
            <h3 className='mt-5'>Популярное</h3>
          </Form>
          <Row className='justify-content-beetwen m-0 p-0 mt-3'>
            <Col xs={12} md={6} className='justify-content-center mt-2'> <PostPopular img={"popular1.png"} /> </Col>


           {/* <PromoFlex type="lg" header="Подарок за первый заказ!" text="Лёгкое говяжье — пластины" pic={banner_pic_1} />
            {goods.filter((el, i) => i >= 8 && i < 12).map(el => <Card {...el} key={el._id} img={el.pictures} setServerGoods={setServerGoods} />)} */}


            <Col xs={12} md={6} className='justify-content-center mt-2'><PostPopular img={"popular2.png"} /></Col>
          </Row>
        </Row>
        <Form className='d-flex justify-content-center'>
          <h3 className='mt-5'>Новые публикации</h3>
        </Form>
        <Row className='justify-content-beetwen m-0 p-0'>

      {posts.filter((el, i) => i >= 8 && i < 11).map(el => <Col xs={12} md={4} key={el._id} className='justify-content-center mt-3'> <PostNew2 {...el} key={el._id}  name={el.author.name} about={el.author.about} avatar={el.author.avatar} group={el.author.group} title={el.title} /></Col>)}


          {/*<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post1.png"} /> </Col>
          <Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post2.png"} /></Col>
          <Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post3.png"} /></Col> */}


        </Row>
        <Row className='justify-content-beetwen m-0 p-0'>
          <Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post4.png"} /> </Col>
          <Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post5.png"} /></Col>
          <Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post6.png"} /></Col>
        </Row>

    </>
}

export default Main;