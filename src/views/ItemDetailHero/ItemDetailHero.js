import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { errorAlert, messageAlert } from '../../utils/alerts';
import ItemHero from '../../Component/ItemHero/ItemHero';

import './ItemDetailHero.css';

const ItemDetailHero = () => {
  const { register, handleSubmit } = useForm();
  const [hero, setHero] = useState([]);

  const handleSerch = async ({ heroName }) => {
    if (heroName !== '') {
      const url = `https://superheroapi.com/api/10225153601128740/search/${heroName}`;

      await fetch(url)
        .then((res) => res.json())
        .catch((error) => errorAlert(error))

        .then((response) => {
          if (response.results !== undefined) {
            setHero(response.results);
          } else {
            messageAlert(
              'error',
              'No se encontro ningun resultado con ese nombre de heroe'
            );
          }
        })
        .catch((error) => errorAlert(error));
    } else {
      messageAlert('error', 'Por favor ingrese un nombre de personaje');
    }
  };

  return (
    <>
      <div className="container_item_Detail_hero">
        <Form
          className="form_item_Detail_hero"
          onSubmit={handleSubmit(handleSerch)}
        >
          <Form.Group className="form_group" controlId="formBasicEmail">
            <Form.Label className="form-label">
              <h5>Ingrese el nombre de Heroe</h5>
            </Form.Label>
            <Form.Control
              className="input-search"
              type="text"
              placeholder="Nombre de heroe"
              name="heroName"
              ref={register}
            />
            <Button
              className="btn_form_item_Detail_hero"
              variant="primary"
              type="submit"
            >
              Buscar
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="container-hero">
        {hero.map((h) => (
          <ItemHero key={h.id} hero={h} />
        ))}
      </div>
    </>
  );
};
export default ItemDetailHero;
