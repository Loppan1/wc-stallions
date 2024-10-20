import { forwardRef } from "react";
import './BreedPage.css';
import logo from '../../assets/logo.png';

interface BreedPageProps {
  breed: string;
  horses: string[];
}

const BreedPage = forwardRef<HTMLDivElement, BreedPageProps>(({ breed, horses }, ref) => {
  return (
    <div className="page breed-page" ref={ref} data-density="hard">
      <div className="page-content">
        <img src={logo} className="logo" alt="Logo" />
        <h2>Breed: {breed}</h2>
        <p>Horses of this breed:</p>
        <ul>
          {horses.map((horse, index) => (
            <li key={index}>{horse}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default BreedPage;