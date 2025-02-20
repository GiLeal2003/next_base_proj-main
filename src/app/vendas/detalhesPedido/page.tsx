"use client"

import Link from 'next/link';
import styles from './detalhe.module.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Page() {
  const [items, setItems] = useState([
    { name: 'Queijo Quente', price: 5.00, quantity: 1 },
    { name: 'Pão com Ovo', price: 5.00, quantity: 1 },
    { name: 'Suco de Limão', price: 10.00, quantity: 1 },
  ]);

  

  const [clientName, setClientName] = useState('Giovana');
  const [status, setStatus] = useState('Concluído');

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (index:number, quantity:number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  };

  return (
    <div className={styles.App}>
      <div className={styles.card}>
        <div className={styles.card_content}>
          <div className={styles.client_status}>
            <p className={styles.client}>Cliente: {clientName}</p>
            <select
              className={styles.status_dropdown}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Andamento">Andamento</option>
              <option value="Concluído">Concluído</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          <div className={styles.itens}>
            <h2 className={styles.itens_title}>Itens</h2>
            <div className={styles.itens_list}>
              {items.map((item, index) => (
                <div key={index} className={styles.iten_produtos_price}>
                  <p className={styles.iten}>{item.name}</p>
                  <div className={styles.quantity_price}>
                    <div className={styles.quantity}>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                      />
                      <span className={styles.times}>X</span>
                    </div>
                    <p className={styles.price}>
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.resumo_totais_precos}>
            <h2 className={styles.resumo_title}>Resumo do Pedido</h2>
            <div className={styles.resumo_list}>
              <div className={styles.resumo_item}>
                <p className={styles.totais}>Subtotal</p>
                <p className={styles.precos}>
                  R$ {calculateTotal().toFixed(2)}
                </p>
              </div>
              <div className={styles.resumo_item}>
                <p className={styles.totais}>Desconto</p>
                <p className={styles.precos}>R$ 0,00</p>
              </div>
              <div className={styles.resumo_item}>
                <p className={styles.totais}>Cupom</p>
                <p className={styles.precos}>R$ 0,00</p>
              </div>
              <div className={styles.resumo_item}>
                <p className={styles.totais}>Total</p>
                <p className={styles.precos}>
                  R$ {calculateTotal().toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <Link href={`http://localhost:3000/vendas/pedidos`}><button className={styles.button} onClick={() => {}}>Finalizar</button></Link>
        </div>
      </div>
    </div>
  );
}
