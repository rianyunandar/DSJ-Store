import React ,{useState, useEffect}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'
import Rating from '../components/Rating';

const ProductScreen = ({match}) => {


    const [product, setProduct] = useState({})

    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${match.params.id}`)
  
        setProduct(data)
      }
  
      fetchProduct()
    }, [match])
    
    return (
        <>
        <Link className='btn btn-dark  my-3' to='/'>Kembali</Link>
            <Row>
                <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={4}>
                    <ListGroup variant='flush'>

                <ListGroup.Item>
               <h3> {product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                <Rating value={product.rating}
                text={`${product.numReviews} Ulasan`} />
               </ListGroup.Item>

               <ListGroup.Item>
                Price Rp. {product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                Deskripsi Product : {product.description}
                </ListGroup.Item>

                </ListGroup>
                </Col>

                <Col md={2}>
                <ListGroup>
                <ListGroup.Item>

                <Row>
                Price: <strong> Rp. {product.price}</strong>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Row>
                    Status : {product.countInStock >0 ? 'Stok Ada' : 'Aduh habis Maap ya'}
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>

                <Button className='btn-block'
                type='button'
                disable={product.countInStock === 0 }>
                    Tambahkan ke keranjang
                </Button>
                </ListGroup.Item>

                </ListGroup>
                </Col>
        











            </Row>
          
        </>
    )
}

export default ProductScreen
