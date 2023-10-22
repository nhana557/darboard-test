import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardProfile from "../card/cardProfile";

import ppIcon from "../../assets/images/pp-white.png";
function Carausel({ data }) {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={3}
			className="h-36"
		>
			{data &&
				data.map((item, i) => (
					<SwiperSlide key={i}>
						<CardProfile
							name={item.name}
							email={item.email}
							ppIcon={ppIcon}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	);
}

export default Carausel;
