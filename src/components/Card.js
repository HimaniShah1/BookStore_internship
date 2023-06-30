import { Card, Grid, Row, Text, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import List from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./Card.css";

export default function Cards({ query, items, setItems }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userInfo);
  const Filterlist = List.filter((data) => {
    if (!query || query === "") return data;
    else return data.title.toLowerCase().includes(query.toLowerCase());
  });
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <Grid.Container gap={2} justify="flex-start" className="card-container">
      {Filterlist.map((item) => (
        <Grid xs={6} sm={3} key={item.id} className="card-dimension">
          <Card
            isPressable
            className="custom-card"
          >
            <Card.Body className="card-body">
              <Card.Image className="card-book-img"
                src={item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer className="card-footer">
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text className="price">
                  {item.price}
                </Text>
                <Button className="add-btn"
                  bordered
                  color="primary"
                  auto
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  Add
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
