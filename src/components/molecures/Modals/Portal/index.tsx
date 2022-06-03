import ReactDOM from 'react-dom';

interface PortalProps {
  children?: React.ReactNode;
}
const Portal: React.FC<PortalProps> = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el as Element);
};

export default Portal;
