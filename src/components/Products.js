// PRODUCTS COMPONENT //

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Products({itemsForDisplay}) {
  
  const cards = itemsForDisplay.map(item => {
    return (
        <SwiperSlide key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.name} className="card__image" />
            <div className="card__info">
              <h2 className="card__name">{item.name}</h2>
              <p className="card__price">${item.price}</p>
            </div>
          </div>
      </SwiperSlide>
    )
  })

  return (
    <div className="products">
      <h1 className="products__header">Products</h1>
      <div className="products__container">
        <Swiper navigation={true} modules={[Navigation]} className="swiper">
          {cards}
        </Swiper>
      </div>
    </div>
  )
}