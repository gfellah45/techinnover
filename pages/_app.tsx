import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import ToastContainer, {
  MyCustomToast,
} from '../components/atoms/ToastContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider
      components={{ Toast: MyCustomToast }}
      placement="bottom-center"
      autoDismiss
      autoDismissTimeout={6000}
    >
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
