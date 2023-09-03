// PRODUCTS COMPONENT //

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Mousewheel, Keyboard, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Products = ({itemsForDisplay}) => {

  const formatItemName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  const cards = itemsForDisplay.map(item => {
    return (
        <SwiperSlide key={item.id} >
          <Link to={`/products/${item.id}`}>
            <div className="card">
              <img src={item.image} alt={item.name} className="card__image" />
              <div className="card__info">
                <h2 className="card__name">{formatItemName(item.name)}</h2>
                <p className="card__price">${item.price}</p>
              </div>
            </div>
          </Link>
      </SwiperSlide>
    )
  });

  return (
    <div id="products" className="products">
      <h1 className="products__header">Products</h1>
      <div className="products__container">
        <Swiper
          cssMode={true} 
          pagination={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={-40} 
          modules={[Pagination, Mousewheel, Keyboard, Navigation]} 
          className="swiper"
          breakpoints={
            {
              672: {
              slidesPerView: 3
              },
              1050: {
                slidesPerView: 4
              }
            }
          }
          >
          {cards}
        </Swiper>
      </div>
    </div>
  )
};

export default Products;