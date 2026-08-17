import Flooring375 from '../../assets/images/portfolio_img/flooring_357.webp';
import LivingRoom375 from '../../assets/images/portfolio_img/livingroom_357.webp';
import Plumbing375 from '../../assets/images/portfolio_img/plumbing_357.webp';
import Tiling375 from '../../assets/images/portfolio_img/tiling_357.webp';
import WoodWork375 from '../../assets/images/portfolio_img/wood_work_1_357.webp';
import type { CarouselType }  from '../../types.ts';

export const CarouselData: CarouselType[] = [
    {
        carouselImage: Flooring375,
        serviceType: 'Fitting',
        service: 'Wood Flooring',
        alt: 'Flooring Project'
    },
    {
        carouselImage: LivingRoom375,
        serviceType: 'Decor',
        service: 'Painting',
        alt: 'Painting Project'
    },
    {
        carouselImage: Plumbing375,
        serviceType: 'Repairs',
        service: 'Plumbing',
        alt: 'Plumbing Project'
    },
    {
        carouselImage: Tiling375,
        serviceType: 'Repairs',
        service: 'Tiling',
        alt: 'Titling Project'
    },
    {
        carouselImage: WoodWork375,
        serviceType: 'Carpentry',
        service: 'Home Repairs',
        alt: 'Carpentry Project'
    }
]