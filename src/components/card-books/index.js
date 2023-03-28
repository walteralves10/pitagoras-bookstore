import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const noImg = "https://www.arauco.cl/brasil/wp-content/uploads/sites/17/2018/01/branco-supremo-producto-1.jpg";

const CardBooks = (props) => {

    const navigate = useNavigate();

    const onClickCard = (book) => {
        navigate('/detailsbooks', {state: {book}});
    };

    return (
        <Row>
            {
                props.books?.catalogo?.map((book, index) =>
                    index >= props.pageElement.minIndex &&
                    index < props.pageElement.maxIndex && (
                        <Col key={`col-${index}`} span={6}>
                            <Card
                                onClick={() => onClickCard(book)}
                                key={`card-${index}`}
                                hoverable //border:"5px solid #5B3000",
                                style={{ marginTop: "5%", padding: "10%", margin: "5%", textAlign: "-webkit-center" }}
                                cover={<img style={{ height: "auto", maxWidth: "80%" }} alt="" src={book?.img === "" ? noImg : book?.img} />}
                            >
                                <Meta title={book?.title.split(',')[0]} description={book?.title.split(',')[1]} />
                                <h3 style={{ color: "#004029" }}> {`${book?.price === "ESGOTADO" ? book?.price : `R$ ${book?.price},00`} | ${book?.quantity}`} </h3>

                            </Card>
                        </Col>
                    )
                )}
        </Row>
    )

}

export default CardBooks;