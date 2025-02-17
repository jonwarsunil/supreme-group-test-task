import * as yup from 'yup';
import vehicleFullbody from '../../assets/images/car-exterior.png';
import vehicleFront from '../../assets/images/vehicleFront.png';
import carCabin from '../../assets/images/car-interior.jpg';
import carTrunk from '../../assets/images/car-trunk.jpg';
import carExterior from '../../assets/images/passanger-vehicle-fullbody.png';
import cargoTruck from '../../assets/images/cargo-truck.png';
import commercialVehicleCabin from '../../assets/images/commercial-vehicle-cabin.png';
import engine from '../../assets/images/engine.png';

export const contactFormSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required').min(3, 'Full Name must be at least 3 characters'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

export const tabsData = [
  {
    id: '1',
    label: 'Tab 1',
    content: 'Passenger vehicles',
    description: 'Revving up Nonwoven innovation from interior to exterior.',
  },
  {
    id: '2',
    label: 'Tab 2',
    content: 'Commercial vehicles',
    description: 'Advancing engineering for heavy-duty vehicles.',
  },
];

export const PassangerVehicleSlides = [
  { id: '1', image: vehicleFullbody, text: 'Complete Body' },
  { id: '2', image: vehicleFront, text: 'Front' },
  { id: '3', image: carCabin, text: 'Cabin' },
  { id: '4', image: carTrunk, text: 'Trunk' },
  { id: '5', image: carExterior, text: 'Exterior' },
];

export const CommercialVehicleSlides = [
  { id: '1', image: cargoTruck, text: 'Complete Body' },
  { id: '2', image: commercialVehicleCabin, text: 'Cabin' },
  { id: '3', image: engine, text: 'Engine' },
];
