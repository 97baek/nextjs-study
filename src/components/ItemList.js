import React from 'react';
import Link from 'next/link';
import { Grid } from 'semantic-ui-react';
import styles from './ItemList.module.css';

function ItemList({ list }) {
  return (
    <Grid columns={3}>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <Link href={`/view/${item.id}`}>
              <a>
                <div className={styles.wrap}>
                  <img src={item.image_link} alt={item.name} styles={styles.img_item} />
                  <strong className={styles.txt_info}>{item.name}</strong>
                  <span>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default ItemList;
