import { Card, Row, Col } from "antd";

const { Meta } = Card;

const CardBooks = (props) => {

    return (
        <Row>
            {
                props.books?.catalogo?.map((book, index) => {
                    return (
                        <Col key={`col-${index}`} span={6}>
                            <Card
                                key={`card-${index}`}
                                hoverable
                                style={{ marginTop: "5%", padding: "10%", margin: "5%" }}
                                cover={<img style={{ height:"300px" }} alt="" src="" />}
                            >
                                <Meta title={book?.title.split(',')[0]} description={book?.title.split(',')[1]} />
                                <h3> {`${book?.price === "ESGOTADO" ? book?.price : `R$ ${book?.price},00`} | ${book?.quantity}`} </h3>

                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default CardBooks;