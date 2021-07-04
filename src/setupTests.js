import requestAnimationFrame from './tempPolyfills';
 
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
Enzyme.configure({ disableLifecycleMethods: true });