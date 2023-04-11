import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraBaseProvider theme={chakraTheme}>
			<App />
		</ChakraBaseProvider>
	</React.StrictMode>
);
